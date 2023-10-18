import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Works() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Imposta l'opacità in base a inView
      transition={{ duration: 3 }}
      ref={ref} // Aggiungi il ref al div che vuoi osservare
    >
      <div className="gap-2 grid grid-cols-12 grid-rows-2 px-3 py-2">
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/*  <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_1.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/* <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_2.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/* <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_3.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/*  <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_4.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/*  <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_5.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/* <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_6.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/*  <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_7.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/* <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_8.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Il salotto delle stelle
            </p>
            {/*  <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4> */}
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/work_9.jpg"
          />
        </Card>
      </div>
    </motion.div>
  );
}
