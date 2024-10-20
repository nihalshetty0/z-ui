import * as React from "react";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownValue,
} from "@/components/ui/dropdown";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SelectDemo() {
  return (
    <div className="m-10">
      <div className="my-5">
        <ThemeToggle />
      </div>

      <Dropdown>
        <DropdownTrigger className="w-[330px]">
          <DropdownValue placeholder="Choose an option" />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">
            Apple sajdfklajs dfkj;ksdf aksjdfl;kads flj
          </DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="pineapple">Pineapple</DropdownItem>
          <DropdownItem value="blueberry">Blueberry</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
          <DropdownItem value="mango">Mango</DropdownItem>
          <DropdownItem value="kiwi">Kiwi</DropdownItem>
          <DropdownItem value="peach">Peach</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
        </DropdownContent>
      </Dropdown>
      <br />
      <br />
      <br />
      <Dropdown readOnly size="sm">
        <DropdownTrigger className="w-[300px]">
          <DropdownValue placeholder="Choose an option" />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">
            Apple sajdfklajs dfkj;ksdf aksjdfl;kads flj
          </DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="pineapple">Pineapple</DropdownItem>
          <DropdownItem value="blueberry">Blueberry</DropdownItem>
        </DropdownContent>
      </Dropdown>
      <br />
      <br />
      <br />
      <br />
      <Dropdown disabled size="lg">
        <DropdownTrigger className="w-[300px]">
          <DropdownValue placeholder="Choose an option" />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">
            Apple sajdfklajs dfkj;ksdf aksjdfl;kads flj
          </DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="pineapple">Pineapple</DropdownItem>
          <DropdownItem value="blueberry">Blueberry</DropdownItem>
        </DropdownContent>
      </Dropdown>

      <br />
      <br />
      <br />
      <Dropdown>
        <DropdownTrigger className="w-[300px]">
          <DropdownValue placeholder="Choose an option" />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">
            Apple sajdfklajs dfkj;ksdf aksjdfl;kads flj
          </DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="pineapple">Pineapple</DropdownItem>
          <DropdownItem value="blueberry">Blueberry</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
          <DropdownItem value="mango">Mango</DropdownItem>
          <DropdownItem value="kiwi">Kiwi</DropdownItem>
          <DropdownItem value="peach">Peach</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
        </DropdownContent>
      </Dropdown>
      <br />
      <br />
      <br />
      <br />
      <Dropdown size="sm">
        <DropdownTrigger className="w-[300px]">
          <DropdownValue placeholder="Choose an option" />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">
            Apple sajdfklajs dfkj;ksdf aksjdfl;kads flj
          </DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="pineapple">Pineapple</DropdownItem>
          <DropdownItem value="blueberry">Blueberry</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
          <DropdownItem value="mango">Mango</DropdownItem>
          <DropdownItem value="kiwi">Kiwi</DropdownItem>
          <DropdownItem value="peach">Peach</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
        </DropdownContent>
      </Dropdown>
      <br />
      <br />
      <br />
      <br />

      <Dropdown size="lg">
        <DropdownTrigger className="w-[300px]">
          <DropdownValue placeholder="Choose an option" />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem value="apple">
            Apple sajdfklajs dfkj;ksdf aksjdfl;kads flj
          </DropdownItem>
          <DropdownItem value="banana">Banana</DropdownItem>
          <DropdownItem value="pineapple">Pineapple</DropdownItem>
          <DropdownItem value="blueberry">Blueberry</DropdownItem>
          <DropdownItem value="strawberry">Strawberry</DropdownItem>
          <DropdownItem value="mango">Mango</DropdownItem>
          <DropdownItem value="kiwi">Kiwi</DropdownItem>
          <DropdownItem value="peach">Peach</DropdownItem>
          <DropdownItem value="grape">Grape</DropdownItem>
        </DropdownContent>
      </Dropdown>
      {/* <Input /> */}
    </div>
  );
}
