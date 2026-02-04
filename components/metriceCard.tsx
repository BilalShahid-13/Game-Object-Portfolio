import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { montserrat } from "@/lib/utils";
import CountUp from "./CountUp";
import { IMetricData } from "./Metrices";
import { motion } from "framer-motion";
import { itemVariants } from "./heroImage";

export default function MetriceCard({ title, Icon, value }: IMetricData) {
  return (
    <motion.div variants={itemVariants}
      className='w-[20%] h-24'>
      <Card >
        <CardHeader className='flex flex-col justify-center items-center'>
          <CardTitle className='flex flex-row gap-2 justify-center items-center'>  {Icon && <Icon />} {title}</CardTitle>
          <CardDescription>
            <CountUp
              from={0}
              to={value}
              separator=","
              direction="up"
              duration={0.8}
              className={`${montserrat.className} count-up-text text-heading font-semibold`}
            />
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
