import { Input } from "@/components/ui/input";
import * as React from "react";

export default function InputView() {
  return (
    <div className="m-10 flex flex-col gap-5">
      <Input
        className="w-[300px]"
        inputSize={"sm"}
        placeholder="Text here"
        // value={"This is great!!"}
      />

      <Input
        className="w-[300px]"
        inputSize={"md"}
        placeholder="Text here"
        // value={"This is great!!"}
      />
      <Input
        className="w-[300px]"
        inputSize={"lg"}
        placeholder="Text here"
        // value={"This is great!!"}
      />
      <Input
        className="w-[300px]"
        readOnly
        placeholder="Text here"
        value={"This is great!!"}
      />
      <Input
        className="w-[300px]"
        readOnly
        placeholder="Text here"
        // value={"This is great!!"}
      />
      <Input
        className="w-[300px]"
        disabled
        placeholder="Text here"
        // value={"This is great!!"}
      />
      <Input
        className="w-[300px]"
        disabled
        placeholder="Text here"
        // value={"This is great!!"}
      />
    </div>
  );
}
