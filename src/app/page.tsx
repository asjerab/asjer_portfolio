import React from 'react';
import { Button } from "@/components/ui/button";
import downImgTwo from "@/images/down-img-two.png";
import "./style.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center w-full py-12 p-5 sm:p-12 xl:p-16">
        <h1 className="bauziet-regular text-slate-950 text-3xl font-normal">
          asjer bereket
        </h1>
        <div className="links-nav bauziet-regular text-lg flex gap-5">
          <a className="transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms" href="#work-link">Work</a>
          <a className="transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms" href="#">About</a>
          <a className="transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms" href="#">Contact</a>
          <button className="transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </button>
        </div>
        <svg
          className="res-bar cursor-pointer hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.75 9H20.25M3.75 15.75H20.25"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="hero-text-wrapper flex items-center h-[850px]">
        <div className="w-[1073px]">
          <h1 className="hero-big-text bauziet-regular my-3">
            Eager, Fresh, and Hungry to Learn: Your Next Front-End Buddy.
          </h1>
          <p className="hero-small-text bauziet-regular text-xl w-[1000px] my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            egestas urna sit amet euismod. Donec consequat lorem at elit
            sagittis interdum.
          </p>

          <div className="flex gap-3 my-3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/asjer-bereket-343a8b28b/"
            >
              <Button
                variant="outline"
                className="flex items-center gap-2 text-base text-slate-100  bg-gradient-to-r from-purple-500 to-pink-500 hover:text-slate-300 transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms"
              >
                Linked
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M14.4 0H0.6C0.268125 0 0 0.268125 0 0.6V14.4C0 14.7319 0.268125 15 0.6 15H14.4C14.7319 15 15 14.7319 15 14.4V0.6C15 0.268125 14.7319 0 14.4 0ZM4.44937 12.7819H2.22375V5.62313H4.44937V12.7819ZM3.3375 4.64438C3.08236 4.64438 2.83295 4.56872 2.62081 4.42697C2.40868 4.28522 2.24333 4.08375 2.1457 3.84804C2.04806 3.61232 2.02251 3.35294 2.07229 3.10271C2.12206 2.85247 2.24492 2.62262 2.42533 2.44221C2.60574 2.2618 2.8356 2.13894 3.08583 2.08916C3.33607 2.03939 3.59544 2.06493 3.83116 2.16257C4.06688 2.26021 4.26835 2.42555 4.4101 2.63769C4.55184 2.84983 4.6275 3.09924 4.6275 3.35438C4.62562 4.06688 4.04813 4.64438 3.3375 4.64438ZM12.7819 12.7819H10.5581V9.3C10.5581 8.46938 10.5431 7.4025 9.40125 7.4025C8.24438 7.4025 8.06625 8.30625 8.06625 9.24V12.7819H5.84438V5.62313H7.97813V6.60188H8.00812C8.30437 6.03938 9.03 5.445 10.1138 5.445C12.3675 5.445 12.7819 6.92812 12.7819 8.85563V12.7819Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Button>
            </a>
            <a target="_blank" href="https://github.com/asjerab">
              <Button
                variant="outline"
                className="flex items-center gap-2 text-base text-slate-100  bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-slate-300 transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms"
              >
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.5 1.25C6.67924 1.25 5.86651 1.41166 5.10823 1.72575C4.34994 2.03984 3.66095 2.50022 3.08058 3.08058C1.90848 4.25269 1.25 5.8424 1.25 7.5C1.25 10.2625 3.04375 12.6062 5.525 13.4375C5.8375 13.4875 5.9375 13.2938 5.9375 13.125V12.0687C4.20625 12.4437 3.8375 11.2312 3.8375 11.2312C3.55 10.5062 3.14375 10.3125 3.14375 10.3125C2.575 9.925 3.1875 9.9375 3.1875 9.9375C3.8125 9.98125 4.14375 10.5813 4.14375 10.5813C4.6875 11.5313 5.60625 11.25 5.9625 11.1C6.01875 10.6938 6.18125 10.4188 6.35625 10.2625C4.96875 10.1063 3.5125 9.56875 3.5125 7.1875C3.5125 6.49375 3.75 5.9375 4.15625 5.49375C4.09375 5.3375 3.875 4.6875 4.21875 3.84375C4.21875 3.84375 4.74375 3.675 5.9375 4.48125C6.43125 4.34375 6.96875 4.275 7.5 4.275C8.03125 4.275 8.56875 4.34375 9.0625 4.48125C10.2562 3.675 10.7812 3.84375 10.7812 3.84375C11.125 4.6875 10.9063 5.3375 10.8438 5.49375C11.25 5.9375 11.4875 6.49375 11.4875 7.1875C11.4875 9.575 10.025 10.1 8.63125 10.2562C8.85625 10.45 9.0625 10.8313 9.0625 11.4125V13.125C9.0625 13.2938 9.1625 13.4938 9.48125 13.4375C11.9625 12.6 13.75 10.2625 13.75 7.5C13.75 6.67924 13.5883 5.86651 13.2742 5.10823C12.9602 4.34994 12.4998 3.66095 11.9194 3.08058C11.3391 2.50022 10.6501 2.03984 9.89177 1.72575C9.13349 1.41166 8.32076 1.25 7.5 1.25Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Button>
            </a>
          </div>

          <div className="h-[300px] flex items-center">
            <a href="#work-link">
              <img
                className="cursor-pointer transform translate-y-0 hover:-translate-y-1 transition-all delay-300ms"
                src={downImgTwo.src}
                alt="Down Image"
              />
            </a>
          </div>
        </div>
      </div>

      <div id="work-link" className="work-wrapper">
        <h1 className="work-title bauziet-regular text">
          Explore my past projects and uncover the magic of front-end.
        </h1>
      </div>
      <div>
        <div>
          <Accordion type="single" collapsible className="accordion-wrapper">
            <AccordionItem value="item-1">
              <AccordionTrigger className="accordion-project-name">
                Project name
              </AccordionTrigger>
              <AccordionContent className="accordion-p-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                <br />
                <Button variant="outline" className="my-6">View</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="accordion-project-name">
                Project name
              </AccordionTrigger>
              <AccordionContent className="accordion-p-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                <br />
                <Button variant="outline" className="my-6">View</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="accordion-project-name">
                Project name
              </AccordionTrigger>
              <AccordionContent className="accordion-p-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor egestas urna sit amet euismod. Donec consequat lorem at
                elit sagittis interdum.
                <br />
                <Button variant="outline" className="my-6">View</Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
