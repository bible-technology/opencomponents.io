import Link from 'next/link'
import Image from 'next/image'

import Gist from 'react-gist'

import HeaderStaticPage from '../components/HeaderStaticPage'
import Head from 'next/head'

const HeaderConfig = {
  title: 'Headless UI Components: Creating re-usable logic without thinking about design',
  name: 'Osman Akar',
  date: 'May 3, 2021·4 min read',
}

export default function HeadlessUI() {
  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <Head>
        <title>
          Headless UI Components: Creating re-usable logic without thinking about design -
          Open Components Ecosystem
        </title>
        <meta
          name="description"
          content="A headless user interface component is a component that offers maximum visual flexibility by providing no interface. This might sound like providing a user interface pattern without providing a user interface"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderStaticPage config={HeaderConfig} />
      <div className="mx-auto md:px-10 lg:px-20 2xl:px-40 article">
        <br />
        <figure>
          <Image
            layout="responsive"
            width="700"
            height="467"
            src={'/headless-ui/pic1.jpg'}
            alt="lego island"
          />
          <figcaption className="mt-1 text-gray-400">
            Glen Carrie —{' '}
            <Link href="https://unsplash.com/photos/HpMihL323k0">
              <a target="_blank">
                <u>https://unsplash.com/photos/HpMihL323k0</u>
              </a>
            </Link>{' '}
          </figcaption>
        </figure>
        <br />
        <br />
        <h2 className="font-bold text-3xl">Introduction</h2>
        <br />
        <p>
          A headless user interface component is a component that offers maximum visual
          flexibility by providing no interface. This might sound like providing a user
          interface pattern without providing a user interface. That’s funny but true.
        </p>
        <br />
        <p>
          I will demonstrate this pattern with React but this pattern is not specific to
          React. It is just a pattern that helps to build reusable user interface
          components.
        </p>
        <br />
        <br />
        <h2 className="font-bold text-3xl">What is it?</h2>
        <br />
        <p>
          Headless components are the components that have no user interface but have
          functionality. It does not care about how your components look, how they are
          designed, styled. It just gives you the functionality and how it will look when
          it is mounted or hovered is under your control. It separates the logic and
          behavior of a component from its visual representation.
        </p>
        <br />
        <blockquote className="border-black border-l-2 pl-3">
          <p className="pb-4 text-lg lg:text-xl leading-8">
            <strong>Rule of Separation:</strong>{' '}
            <em>Separate policy from mechanism; separate interfaces from engines.</em>
          </p>
          <p className="font-bold text-lg lg:text-xl leading-8">
            <em>— Eric S. Raymond</em>
          </p>
        </blockquote>
        <br />
        <h2 className="font-bold text-3xl">What is the problem?</h2>
        <br />
        <p>
          Sometimes components are way too tied to the design they present. They are made
          to cater to the designs that can be found at the time of them being made but
          have no mindfulness of future enhancements.
        </p>
        <br />
        <p>
          Most of the time specifications and needs of a component change, by a product
          owner or a UX designer. Developers should have a mindset that a component might
          change in the future and changing the component should not take so much of their
          time. Otherwise, changing a component to cover new added future enhancements
          will be harsh and will be open to create new bugs.
        </p>
        <br />
        <p>
          Headless components cover all of these concerns by having nothing to do with the
          user interface and just providing functionality. When you provide stable,
          well-tested functionality, changing a component’s design will be a lot easier
          for developers.
        </p>
        <br />
        <br />
        <h2 className="font-bold text-3xl">Let’s get into an example!</h2>
        <br />
        <p>
          The code right below is an example of a Theme component. It is just for a
          demonstration and it is not a headless component. It just sets the current theme
          of an application and displays what the current theme is.
        </p>
        <br />
        <Gist id="061bd6925289faf121e4c17a19e50e41" />
        <div className="description-gist">
          <p>theme component, not headless</p>
        </div>
        <br />
        <p>
          As you can see here, the user interface and logic are coupled here. Let’s say
          that you want to change <b>Set as Light</b> and <b>Set as Dark</b> texts to the
          icon. You need to pass them as props and you need to add a couple of props to
          make it possible.
        </p>
        <br />
        <Gist id="41ea88e412160460a8f82bff265d6b49" />
        <div className="description-gist">
          theme component with icon props, not headless
        </div>
        <br />
        <p>
          In the code snippet, we have added two new props, <b>lightIcon</b> and{' '}
          <b>darkIcon</b>. We have changed our Theme component to handle these props. If
          they are present, icons will be shown. Otherwise, old behavior will still work
          and texts will be displayed.
        </p>
        <br />
        <p>
          Let’s say that it is not enough and we have a new silly requirement which is:
          current theme should not be shown on some pages. That means it should be
          controlled by the parent component. With a new prop, <b>showCurrentTheme</b>.
        </p>
        <br />
        <Gist id="3e8affd0cde8d21075432b8a7311c223" />
        <div className="description-gist">
          theme component with showCurrentTheme prop, not headless
        </div>
        <br />
        <strong className="text-xl leading-8">Yes, we have done it!</strong>
        <br />
        <p className="mt-4">
          At the end let’s summarize what this simple silly Theme component does:
        </p>
        <br />
        <ul className="list-disc ml-6 text-xl leading-8">
          <li className="mb-2">It displays the current theme status</li>
          <li className="mb-2">It allows you to change the theme as light</li>
          <li className="mb-2">It allows you to change the theme as dark</li>
          <li className="mb-2">It allows you to hide the current theme status</li>
        </ul>
        <br />
        <p>
          With each requirement, our component will change, and let’s assume that there
          will be a couple of more new requirements to this component and it will be more
          complex. It is going to be hard to maintain and follow components by developers.
          Also, it can reach a point that adding new requirements is not possible without
          affecting an old behavior.
        </p>
        <br />
        <strong className="text-lg lg:text-xl leading-8">
          Headless component will rescue!
        </strong>
        <br />
        <p className="mt-4">
          The possibilities with headless component implementation will be almost endless.
          You can do whatever you want with your user interface by having what is provided
          with a headless theme component. Let’s see how to write this component with
          react custom hook.
        </p>
        <br />
        <p className="italic">
          I should mention that before react hooks headless components are generally
          implemented with render props pattern or a higher-order component. You can
          search these patterns and understand how to implement headless components with
          these approaches. I will demonstrate it with a react custom hook.
        </p>
        <br />
        <Gist id="a26fe119fb02c4d51df36db7a52f1aaa" />
        <div className="description-gist">
          headless component implemented with react custom hook
        </div>
        <br />
        <p>
          As you can see there is nothing related to the user interface. We have
          implemented a headless component with react custom hook and provided
          functionalities to set theme, <b>setDark</b>, <b>setLight</b>, and also provided
          current <b>theme</b>. With this approach, a developer can implement any user
          interface by using these functionalities. Let’s create some examples.
        </p>
        <br />
        <Gist id="8f51da5aa4d0400e3ba65a64be858010" />
        <div className="description-gist">
          some examples that use theme headless component
        </div>
        <br />
        <p>
          These are some basic examples to give you an idea about how to use headless
          components and what they are exactly. I know it is a simple, dummy example but
          it covers what headless components are all about. This article is not about how
          to implement a theme, but it is just an example of understanding headless
          components. You will find a better suit in your project to implement this
          headless component approach.
        </p>
        <br />
        <br />
        <p>There are great libraries that implement headless components. Like:</p>
        <br />
        <ul className="list-disc ml-6 font-bold underline underline-offset-2 text-xl leading-8">
          <Link href="https://tanstack.com/table/v8/?from=reactTableV7&original=https://react-table-v7.tanstack.com/">
            <a target="_blank">
              <li>react-table</li>
            </a>
          </Link>
          <Link href="https://github.com/americanexpress/react-albus">
            <a target="_blank">
              <li>react-albus</li>
            </a>
          </Link>
          <Link href="https://github.com/jxom/react-selected">
            <a target="_blank">
              <li>react-selected</li>
            </a>
          </Link>
        </ul>
        <br />
        <p>
          I suggest you take a look around the source code of these libraries, especially
          react-table.
        </p>
        <br />
        <br />
        <p className="mb-16">
          If it is not enough for you, there are lots of sources about headless
          components. Take a look at{' '}
          <Link href="https://www.merrickchristensen.com/articles/headless-user-interface-components/">
            <a target="_blank">
              <u>those articles</u>
            </a>
          </Link>
          . I would suggest you read this article which is written by{' '}
          <b>Merrick Christensen.</b>
        </p>
      </div>
    </div>
  )
}
