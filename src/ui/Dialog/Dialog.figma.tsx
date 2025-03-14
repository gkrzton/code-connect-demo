import { Dialog } from "./Dialog";
import figma from "@figma/code-connect";

figma.connect(
  Dialog,
  "https://www.figma.com/file/s3lzR0T5oGJIrhWcU7yb1H?node-id=9215-9336",
  {
    props: {
      children: figma.boolean("Actions", {
        true: figma.children(["Dialog Content", "Dialog Actions"]),
        false: figma.children(["Dialog Content"]),
      }),
    },
    example: (props) => <Dialog>{props.children}</Dialog>,
  }
);
