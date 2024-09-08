import { Button, ButtonProps } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { PlusIcon } from "@radix-ui/react-icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tag } from "@/components/ui/tag";
import React from "react";

export default function Home() {
  return (
    <>
      <Buttons />
      <Tooltips />
      <Accordions />

      <Radio />
      <CheckboxView />
      <InputView />
      <TagView />
      <PopoverView />
    </>
  );
}

const variants = [
  "default",
  "secondary",
  "tertiary",
  "ghost",
  "danger",
  "danger-tertiary",
  "danger-ghost",
] as ButtonProps["variant"][];
const sizes = ["lg", "sm", "md", "xl", "2xl"] as ButtonProps["size"][];

const Buttons = () => {
  return (
    <>
      <div className="order-2 p-5">
        {variants.map((variant) => (
          <div key={variant} className="mb-4 flex items-center gap-2">
            {sizes.map((size) => (
              <Button
                key={`${variant}-${size}`}
                variant={variant === "default" ? undefined : variant}
                size={size === "lg" ? undefined : size}
              >
                Button
              </Button>
            ))}
            <Button
              variant={variant === "default" ? undefined : variant}
              disabled
            >
              Button
            </Button>
          </div>
        ))}
      </div>

      <div className="border-b border-black"></div>

      <div className="order-2 p-5">
        {variants.map((variant) => (
          <div key={variant} className="mb-4 flex items-center gap-2">
            {sizes
              .filter((size) => size !== "2xl")
              .map((size) => (
                <React.Fragment key={size}>
                  <Button
                    key={`${variant}-${size}`}
                    variant={variant === "default" ? undefined : variant}
                    size={size === "lg" ? undefined : size}
                  >
                    Button
                    <PlusIcon />
                  </Button>

                  <IconButton
                    key={`${variant}-${size}`}
                    variant={variant === "default" ? undefined : variant}
                    size={size === "lg" ? undefined : size}
                  >
                    <PlusIcon />
                  </IconButton>
                </React.Fragment>
              ))}
            <Button
              variant={variant === "default" ? undefined : variant}
              disabled
            >
              Button
              <PlusIcon />
            </Button>

            <IconButton
              variant={variant === "default" ? undefined : variant}
              disabled
            >
              <PlusIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </>
  );
};

const Accordions = () => {
  return (
    <>
      <div className="m-4">
        <Accordion type="multiple" className="w-full">
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
              components&apos; aesthetic. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam,
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger disabled>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="m-4">
        <Accordion align="start" type="multiple" className="w-full">
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
              components&apos; aesthetic. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam,
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger disabled>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="m-4">
        <Accordion align="start" isFlush type="multiple" className="w-full">
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
              components&apos; aesthetic. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam,
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger disabled>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

const Tooltips = () => {
  return (
    <div className="m-40">
      <TooltipProvider delayDuration={0} skipDelayDuration={1000}>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button>this</button>
          </TooltipTrigger>
          <TooltipContent side="top" align="end">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <div className="mb-[200px]"></div>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button>this</button>
          </TooltipTrigger>
          <TooltipContent side="top" align="start">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>{" "}
    </div>
  );
};

const Radio = () => {
  return (
    <div className="m-4 space-y-4">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label labelType={"radio"} htmlFor="r1">
            Default
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label labelType={"radio"} htmlFor="r2">
            Comfortable
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label labelType={"radio"} htmlFor="r3">
            Compact
          </Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="comfortable" disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label disabled labelType={"radio"} htmlFor="r1">
            Default
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label disabled labelType={"radio"} htmlFor="r2">
            Comfortable
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label disabled labelType={"radio"} htmlFor="r3">
            Compact
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

const CheckboxView = () => {
  return (
    <div className="m-4 space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label labelType={"checkbox"} htmlFor="terms">
          Accept terms and conditions
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox disabled id="terms" />
        <Label labelType={"checkbox"} disabled htmlFor="terms">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  );
};

const InputView = () => {
  return (
    <div className="m-4 space-y-2">
      <Input placeholder="Search" />
      <Input disabled placeholder="Search" />
      {/* <Input placeholder="Search" value={"This is text"} /> */}
      <Input disabled placeholder="Search" value={"This is text"} />
    </div>
  );
};

const TagView = () => {
  return (
    <div className="m-4 space-y-2 p-10">
      <div className="space-x-2">
        <Tag size={"sm"}>Tag content</Tag>
        <Tag>Tag content</Tag>
        <Tag size={"lg"}>Tag content</Tag>

        <br />
        <br />
        <Tag>Tag content</Tag>
        <Tag variant={"purple"}>Tag content</Tag>
        <Tag variant={"cyan"}>Tag content</Tag>
        <Tag variant={"red"}>Tag content</Tag>
        <Tag variant={"green"}>Tag content</Tag>
        <Tag variant={"teal"}>Tag content</Tag>
        <Tag variant={"magenta"}>Tag content</Tag>
        <Tag variant={"cool-gray"}>Tag content</Tag>
        <Tag variant={"warm-gray"}>Tag content</Tag>
        <Tag variant={"high-contrast"}>Tag content</Tag>
        <Tag variant={"gray"}>Tag content</Tag>
        <Tag variant={"outline"}>Tag content</Tag>

        <br />

        <Tag>Tag content. Extra long long text here.</Tag>
      </div>
    </div>
  );
};

const PopoverView = () => {
  return (
    <div className="p-64">
      <Button variant="ghost">Open popover</Button>
      <br />
      <br />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="start">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-muted-foreground text-sm">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <br />
      <br />
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
};
