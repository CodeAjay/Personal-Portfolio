import "../../index.css";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl py-6 font-semibold text-gray-900 dark:text-white"
          >
            Portfolio
          </a>
          {/* <p className="my-6 text-gray-500 dark:text-gray-400">
            Open-source library of over 400+ web components and interactive
            elements built for better web.
          </p> */}
          <ul className="flex flex-wrap justify-center items-center mb-6 py-3 text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Premium
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://github.com/codeajay"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              Ajay
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
