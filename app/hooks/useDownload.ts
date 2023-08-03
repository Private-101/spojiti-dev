
/// https://github.com/jimengio/files-picker/blob/master/src/util/image.ts

import urlParse from "url-parse";
// import { get, put, post, IJimuApiOption } from "@jimengio/api-base";
// import { IUpload, IDownload } from "./model";

// import { apiHost } from "./config";

import mime from "mime-types";
// import { uploadSign, uploadByUrl, getDownloadUrl } from "./api";
import { useState } from "react";

export interface IUpload {
    fileUrl: string;
    key: string;
  }
  
  export interface IDownload {
    fileUrl: string;
  }

export const useUploadApi = () => {
  let [isLoading, setLoading] = useState(false);

  const startUpload = async (url: string, fileName: string, file: File) => {
    try {
      if (isLoading) return;

      setLoading(true);

      const uploadUrl = await uploadSign(url, fileName);

      await uploadByUrl(uploadUrl.fileUrl, file);

      return uploadUrl.key;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    startUpload,
  };
};

export const useDownloadApi = () => {
  let [isLoading, setLoading] = useState(false);

  const startDownload = async (url: string, filePath: string) => {
    try {
      if (isLoading) return;

      setLoading(true);

      const downloadResult = await getDownloadUrl(url, filePath);

      return downloadResult.fileUrl;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, startDownload };
};

export let apiHost: string;

/** TODO, 未来看情况要扩展多语言 */
export let uploadingLocales = {
  supportExpandedName: "支持扩展名",
  uploadFile: "上传文件",
  maxFileSizeHint: "已超过最大文件大小限制，限制为：{size}",
  error: "异常",
  unsupportedFileType: "不支持该文件类型，仅支持{type}",
  dropzoneTitle: "点击或将文件拖拽到这里上传",
  dropzoneWarnMultiple: "不支持多文件上传",
  uploadFailure: "上传失败",
  downloadFailure: "下载失败",
};

/** 设置上传组件使用的参数 */
export let configureUploading = (options: { apiHost: string; locales?: typeof uploadingLocales }) => {
  apiHost = options.apiHost;
  if (options.locales != null) {
    uploadingLocales = options.locales;
  }
};
export const uploadSign = async (url: string, fileName: string) => {
  // return post<IUpload>({
    return fetch(`${apiHost}/${url}?data=${fileName}`);
};

export const uploadByUrl = async (fileUrl: string, file: File, options?: IJimuApiOption) => {
  return put<void>({
    url: fileUrl,
    data: file,
    headers: {
      "Content-Type": mime.contentType(file.type),
    },
    ...options,
  });
};

export const getDownloadUrl = async (url: string, key: string) => {
  return get<IDownload>({
    baseURL: apiHost,
    url,
    query: { key },
  });
};

export interface IImageProcessOptions {
  resize?: {
    m?: "lfit" | "mfit" | "fill" | "pad" | "fixed";
    w?: number; //1~4096
    h?: number; //1~4096
    l?: number; //1~4096
    s?: number; //1~4096
    limit?: 0 | 1;
    color?: string; //[000000~FFFFFF]
    p?: number; //1~1000
  };
  crop?: {
    w?: number; //1~图片宽度
    h?: number; //1~图片高度
    x?: number; //1~图片边界
    y?: number; //1~图片边界
    g?: "nw" | "north" | "ne" | "west" | "center" | "east" | "sw" | "south" | "se";
  };
  "auto-orient"?: {
    value?: 0 | 1;
  };
}

/**
 * TODO, 针对真实的 API 再适配, "image" 前缀用于阿里云, 当前服务可能不需要??
 */
export function processOSSImageUrl(downloadLink: string, options: IImageProcessOptions): string {
  if (!downloadLink || !options) {
    return downloadLink;
  }

  const keys = Object.keys(options);
  if (keys.length === 0) {
    return downloadLink;
  }

  const urlObj = urlParse(downloadLink, false);
  let xProcess = "image";
  keys.forEach((key) => {
    switch (key) {
      case "resize":
        const resizeOptions = options[key];
        const resizeQuerys = Object.keys(resizeOptions)
          .map((resizeKey) => (resizeOptions[resizeKey] != null ? `${resizeKey}_${resizeOptions[resizeKey]}` : ""))
          .filter((value) => value !== "");
        if (resizeQuerys.length > 0) {
          xProcess = `${xProcess}/${key},${resizeQuerys.join(",")}`;
        }
        break;
      case "crop":
        const cropOptions = options[key];
        const cropQuerys = Object.keys(cropOptions)
          .map((cropKey) => (cropOptions[cropKey] != null ? `${cropKey}_${cropOptions[cropKey]}` : ""))
          .filter((value) => value !== "");
        if (cropQuerys.length > 0) {
          xProcess = `${xProcess}/${key},${cropQuerys.join(",")}`;
        }
        break;
      case "auto-orient":
        const autoOrientOptions = options[key];
        const autoOrientQuerys = Object.keys(autoOrientOptions)
          .map((autoOrientKey) => (autoOrientOptions[autoOrientKey] != null ? autoOrientOptions[autoOrientKey] : ""))
          .filter((value) => value !== "");
        if (autoOrientQuerys.length > 0) {
          xProcess = `${xProcess}/${key},${autoOrientQuerys.join(",")}`;
        }
        break;
    }
  });

  urlObj.query["x-process"] = xProcess;
  return urlObj.toString();
}

/**
 *
 * @param url 图片地址
 * @param xProcess 图片操作 https://demo-tasks.com/pages/viewpage.action?pageId=22708556
 */
export let processImageUrl = (url: string, xProcess: string): string => {
  let urlObj = urlParse(url, true);
  urlObj.query["x-process"] = xProcess;
  return urlObj.toString();
};


/**
 * Use this paired with Content-Disposition
 * https://stackoverflow.com/a/9195376/883571
 */
export const downloadAsFile = (url: string, fileName?: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "true");
    if (fileName) {
      a.download = fileName;
    }
  
    /** 兼容chorme和firefox */
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("click", true, true);
    a.dispatchEvent(evt);
  };
  
  export const getAttachmentName = (attach: string): string => {
    let strArr = attach.split("/");
    return strArr[strArr.length - 1];
  };
  
  export const downloadByBlob = (data: Blob, fileName?: string) => {
    const url = URL.createObjectURL(data);
    downloadAsFile(url, fileName);
  };
  
  export function interpolateLocale(template: string, data: { [k: string]: any }) {
    if (!template) {
      throw new Error("Parameter 'template' is required.");
    }
  
    if (!data) {
      throw new Error("Parameter 'data' is required.");
    }
  
    for (var key in data) {
      template = template.replace(new RegExp("{" + key + "}", "gi"), data[key]);
    }
  
    return template;
  }