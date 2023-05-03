import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons/lib";

export default function Technology({
  name,
  Icon,
}: PropsWithChildren<{ name: string; Icon: IconType }>) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="w-5 h-5" />
      <p>{name}</p>
    </div>
  );
}
