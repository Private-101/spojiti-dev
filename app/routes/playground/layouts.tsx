import * as React from 'react';
import { Transition } from '@headlessui/react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { MusicalNoteIcon, PlayIcon, TicketIcon, UserCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { classNames } from '~/utils';
import {
  Form,
  Outlet,
  useLocation,
  useLoaderData,
  type ShouldReloadFunction,
  type ShouldRevalidateFunction,
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
  type Theme
} from "~/context/theme.context";
import { getThemeSession } from "~/services/theme.server";
import { useRootLoaderData } from "~/utils";
import type { RootLoaderData } from "~/root";
import {
  Dashboard,
  DashboardMenu,
  DashboardMenuHeader,
  ListItem,
  ListItems,
  buttonStyles
} from "~/components/dashboard/experimental";
import { Card, Title, Text, Grid, Col, Flex } from "tremor/index";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Playground for Spojiti"
    },
    {
      property: "og:title",
      content: "Spojiti | Playground",
    },
    {
      name: "description",
      content: "Spojiti: Playground",
    }
  ];
};

export async function loader({ request, }: LoaderArgs) {
  return null;
};

export default function LayoutDemosRoute() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(true);
  const [theme] = useTheme();
  const location = useLocation();
  const redirectTo = encodeURIComponent(location.pathname + location.search);


  return (
    <Outlet />
  );
};

/*
<main className="p-4">
 <Flex flexDirection="col" justifyContent="around" alignItems="center" className="mb-2">
 <Bars3Icon className="w-6 h-6 self-start" onClick={() => setIsOpen((o) => !o)} />
</Flex>
<Grid numItemsLg={6} className="gap-6 min-h-screen min-w-full">
<Transition
 show={isOpen}
 enter="transition-opacity duration-75"
 enterFrom="opacity-0"
 enterTo="opacity-100"
 leave="transition-opacity duration-150"
 leaveFrom="opacity-100"
 leaveTo="opacity-0"
>
 <Col numColSpanLg={isOpen ? 2 : 0}>
   <div className="space-y-6">
     {Array.from({ length: 4 }).map((_, idx) => (
       <>
         <Card
           onClick={() => setSelectedIndex(idx)}
           className="hover:shadow-lg hover:border-sp-primary">
           <Flex flexDirection="col" justifyContent="around" alignItems="center" className="">
             <Title>Dashboard Item {idx + 1}</Title>
             <Text>optional descriptive text</Text>
           </Flex>
         </Card>
       </>
     ))}
   </div>
 </Col>
 </Transition>

 <Col numColSpanLg={isOpen ? 4 : 6} className="min-w-full">
   <Card className="min-h-screen min-w-full">
       <Flex flexDirection="col" justifyContent="around" alignItems="center" className="mt-6">
         <Title>Item {selectedIndex + 1} Selected</Title>
         <Text>page details below...</Text>
       </Flex>
       <Outlet />
   </Card>
 </Col>
</Grid>
</main>
*/

type IShape = 'circle' | 'square';

interface AvatarWrapperBaseProps {
  // in px
  htmlWidth?: number;
  // in px
  htmlHeight?: number;
  // #fff
  bgColor?: string;
  // circle | square
  shape?: IShape;
  // #000
  textColor?: string;
  children?: React.ReactNode;
}
type AvatarWrapperProps = AvatarWrapperBaseProps & React.HTMLAttributes<HTMLDivElement>;
// type MergeFunction = (props: T, defaults: Partial<T>) => T;
const AvatarPropDefaults: Partial<AvatarWrapperProps> = {
  htmlWidth: 16,
  htmlHeight: 16,
  bgColor: "#fff",
  shape: "circle",
  textColor: "#000",
}
function merge<T extends {}>(props: T, defaults: Partial<T>): T {
  // let merged = {};
  // for (const key in props) {
    // if (!props[key] && !defaults[key]) {
     //  continue;
   //  };

  // }
  return {
    ...defaults as Required<T>,
    ...props as Required<T>
  };
};

const AvatarWrapper = React.forwardRef<HTMLDivElement, AvatarWrapperProps>((props, ref) => {
  const { 
    htmlWidth,
    htmlHeight,
    bgColor,
    shape,
    textColor,
    className,
    children,
  } = merge<AvatarWrapperProps>(props, AvatarPropDefaults);

  return (
    <>
    <div 
    ref={ref}
    className={classNames("", `h-${htmlHeight}`, className ?? "", `max-w-${htmlWidth} min-w-${htmlWidth}`, "flex rounded-full overflow-hidden h-[16px] text-center items-center justify-center bg-neutral-200 text-neutral-800 border-2 border-black")}>
    {children}
    </div>
    </>
  )
})
/*
(props: AvatarWrapperProps) {
  return (
    <>
    
    </>
  )
};
*/
/*
type ScaleTypes = "sm" 110 | "md" 125 | "lg" 150 | "xl" 200 | number n% | none (default)
interface AvatarTextProps { 
  scale: number;
  // scale?: ScaleTypes; // scale-${axis}-${scales[scale]}
  // axis?: "x" | "y" | none (default)
};
const scales = {
  sm: 110,
  md: 125,
  lg: 150,
  xl: 200,
  none: 100
}
<p className=`m-0 align-middle font-bold whitespace-nowrap uppercase`></p>


*/
// Get sum representing all characters in text.
const sumOfCharacters = (text: string) => {
  let sum = 0;
  for (let i = 0; i < text.length; i += 1) {
    sum += text.charCodeAt(i);
  }
  return sum;
};

interface TextAvatarBaseProps {
  shape?: IShape;
  text?: string;
  bgColor?: string;
  textColor?: string;
  htmlWidth?: number;
  htmlHeight?: number;
  imageAlt?: string;
  textProcessor?: (text: string) => string;
};

type TextAvatarMergedProps = TextAvatarBaseProps & React.HTMLAttributes<HTMLParagraphElement>;
interface TextAvatarProps {
  shape?: IShape;
  text?: string;
  bgColor?: string;
  textColor?: string;
  htmlWidth?: number;
  htmlHeight?: number;
  imageAlt?: string;
  textProcessor?: (text: string) => string;

  className?: string;
  
};

// type TextAvatarImperativeHandleProps = Omit<HTMLParagraphElement, keyof HTMLDivElement> & HTMLDivElement;
const TextAvatar = React.forwardRef<HTMLParagraphElement, TextAvatarMergedProps>(({
  htmlWidth = 24,
  htmlHeight = 24,
  className = "",
  shape = "circle",
  text = "text avatar",
  bgColor = '#fff',
  textColor = '#000',
  textProcessor = (text: string) => text.trim(),
  imageAlt = "text avatar",
}, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLParagraphElement>(null);

  /* React.useImperativeHandle(ref, () => {
    return {
      ...containerRef.current,
      ...textRef.current
    }
  }, []); */

  const processedText = React.useMemo(() => {
    return textProcessor(text);
    // const index = sumOfCharacters(text) % backgrounds.length;
    // return {
    //   backgroundColor: backgrounds[index],
    //   processedText,
    // };
  }, [text, textProcessor]);

  // const [scale, setScale] = React.useState<number>(1);
  

  /* React.useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) {
      return;
    }
    const containerWidth = container.offsetWidth;
    const textWidth = text.offsetWidth;
    if (containerWidth - 8 < textWidth) {
      setScale((containerWidth - 8) / textWidth);
    } else {
      setScale(1);
    }
  }, [text, htmlWidth, htmlHeight]); */
  return (
    <AvatarWrapper
      htmlWidth={htmlWidth}
      htmlHeight={htmlHeight}
      className={className}
      shape={shape as IShape}
      bgColor={bgColor}
      textColor={textColor}
      ref={containerRef}
      role="img"
      aria-label={imageAlt}
    >
      <Text ref={textRef} className="px-2 py-4">
        {processedText}
      </Text>
    </AvatarWrapper>
  )
});

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 max-w-150">
        <h1 className="text-3xl font-semibold mb-8">
          Playground Client Error: {error.status} {error.statusText}
        </h1>
        <p className="border-2 border-red-500 text-lg font-normal">{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200">
        <h1 className="text-3xl font-bold mb-8">Client Error</h1>
        <div className="border-2 border-red-500 text-lg font-normal mr-32">
          <p className="mb-2">{error.message}</p>
          <p className="font-semibold text-xl">The stack trace is:</p>
          <pre className="">{error.stack}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200">
        <h1 className="text-3xl font-bold">Unknown Error</h1>
      </div>
    );
  }
};