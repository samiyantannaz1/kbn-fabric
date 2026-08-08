


import { motion } from "framer-motion";

import Container from "@/container/Container";

import { useLanguage } from "@/hooks/useLanguage";

import fa from "@/locales/fa";
import en from "@/locales/en";


function AboutValues(){

const {language}=useLanguage();

const text = language==="fa" ? fa : en;

const fontClass =
language==="fa" ? "font-fa":"font-en";


return (

<section
className="
bg-neutral-50
py-20
lg:py-28
"
>

<Container>


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className={`
text-center
${fontClass}
`}

>


<div
className="
mx-auto
mb-6
h-[2px]
w-16
bg-[#C08A5B]
"
/>


<h2
className="
text-3xl
font-medium
text-neutral-900
lg:text-5xl
"
>

{text.about.values.title}

</h2>


</motion.div>



<div
className="
mt-14
grid
gap-8
md:grid-cols-3
"
>


{
Object.values(text.about.values.items)
.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.15
}}

className={`
rounded-3xl
border
border-neutral-200
bg-white
p-8
text-center
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
${fontClass}
`}

>


<h3
className="
text-xl
font-medium
text-neutral-900
"
>

{item.title}

</h3>


<p
className="
mt-4
leading-7
text-neutral-600
"
>

{item.description}

</p>


</motion.div>


))
}


</div>


</Container>


</section>


)

}


export default AboutValues;