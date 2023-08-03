export const getKeyValue = (keys: string[], obj: Record<string, any>) => {

    for (const key of keys) {
        // let paths = key.split('.');
        // if (paths.length > 1) {
        //     for (const path of paths) {
        //         if (obj[path] && obj[path].length > 0) return obj[path].toString()
        //     }
        // }
      if (obj[key] && obj[key].length > 0) return obj[key].toString()
    }
    return ''
  }