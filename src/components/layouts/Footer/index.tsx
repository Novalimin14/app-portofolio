
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-12 mb-12 flex justify-around w-full text-center">
    <div>
        <p className="text-4xl font-bold">12</p>
        <p className="text-gray-400">Years of experience</p>
    </div>
    <div>
        <p className="text-4xl font-bold">26</p>
        <p className="text-gray-400">Projects completed</p>
    </div>
    <div>
        <p className="text-4xl font-bold">8</p>
        <p className="text-gray-400">Technologies mastered</p>
    </div>
    <div>
        <p className="text-4xl font-bold">500</p>
        <p className="text-gray-400">Code commits</p>
    </div>
</div>
  );
}
