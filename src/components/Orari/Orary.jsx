import React from "react";
import { Link } from "@nextui-org/react";

export default function Orari() {
  return (
    <div className="w-full flex mb-10 mt-10 justify-center" id="Orari">
      <div className="border border-gray-400 border border-gray-400 bg-white rounded-b rounded-b-none rounded-r p-4 ">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Aperto da martedì a sabato
          </div>
          <p className="text-gray-700 text-base">
            Orario continuato dalle 09.00 alle 19.00
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm justify-center w-auto">
            <Link href="tel:0516240980" color="text.secondary">
              Tel. 0516240980
            </Link>
            <br />
            <br />
            <Link href="tel:3452480343" color="text.secondary">
              Cell. 3452480343
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
