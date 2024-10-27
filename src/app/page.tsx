import Image from "next/image";

export default function Home() {
  return (<div className="flex justify-center mt-12">
  <div>
    <input
  type="text"
  placeholder="hammad khan"
  className="input input-bordered input-accent w-full max-w-xs  rounded-tl-3xl rounded-tr-none rounded-bl-3xl rounded-br-none" />
  </div>
  <div>
  <button className="btn btn-wide rounded-tl-none rounded-tr-3xl rounded-bl-none rounded-br-3xl">buttom</button>
  </div>

  </div>
    );
}




