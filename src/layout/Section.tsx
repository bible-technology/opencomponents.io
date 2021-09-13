import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6 ${
      props.yPadding ? props.yPadding : 'py-6'
    }`}
  >
    {(props.title || props.subtitle || props.description) && (
      <div className="mb-12 text-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
        {props.subtitle && (
          <div className="text-primary-500 text-sm font-bold">
            {props.subtitle}
          </div>
        )}
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
