import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8 fixed bottom-0 left-0">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="src/assets/logo-png.png" alt="logo-ct" className="w-40" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as={Link}
              to="https://www.jessica-moore.com/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Portfolio
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="https://github.com/jmychalm13"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Github
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="https://www.linkedin.com/in/jessmoore13/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              LinkedIn
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
    </footer>
  );
}
