import { ReactNode } from 'react';

type IFeatureElementProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

const FeatureElement = (props: IFeatureElementProps) => (
  <div className="feature-element flex flex-col p-8 border border-gray-200 rounded-md bg-white">
    <>
      {props.icon?
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400 border border-gray-300 flex-shrink-0">
            {props.icon}
          </div> 
          <div className="ml-2 text-2xl text-gray-700 font-semibold">
            {props.title}
          </div>
        </div>
      : 
        <>
          <div className="text-2xl text-gray-700 font-semibold">
            {props.title}
          </div>
        </>
      }
    </>

    <div className="mt-3 text-base leading-7">{props.children}</div>

    <style jsx>
      {`
        .feature-element :global(svg) {
          @apply text-white stroke-current w-6 h-6 stroke-2;
        }
      `}
    </style>
  </div>
);

export { FeatureElement };
