import React from "react";
import { Button } from "@/components/ui/button";
import "./style.css";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full accordion-wrapper">
            <AccordionItem value="item-1">
                <AccordionTrigger className="accordion-project-name bauziet-regular">Shalom Oslo</AccordionTrigger>
                <AccordionContent className="w-[900px] max-w-full">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error possimus doloribus quasi obcaecati voluptatem ratione officiis quis natus velit perferendis eos at a, reiciendis quisquam saepe tenetur consectetur suscipit qui, nulla optio aspernatur perspiciatis voluptatibus? Quod consequatur, architecto, maiores optio aperiam ipsam veniam sapiente exercitationem debitis laudantium labore reiciendis expedita.
                    <br />
                    <Button variant="outline" className="my-5">View</Button>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="accordion-project-name bauziet-regular">Unix</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    <br />
                    <Button variant="outline" className="my-5">View</Button>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="accordion-project-name bauziet-regular">Project name</AccordionTrigger>
                <AccordionContent className="accordion-p-text">
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                    <br />
                    <Button variant="outline" className="my-5">View</Button>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}