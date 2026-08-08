



import { motion } from "framer-motion";

import Container from "@/container/Container";

import { useLanguage } from "@/hooks/useLanguage";

import fa from "@/locales/fa";
import en from "@/locales/en";

import storyImage from "@/assets/images/about/story.jpg";


function BrandStory(){

const {language}=useLanguage();

const text = language==="fa" ? fa : en;

const fontClass =
 language==="fa" ? "font-fa":"font-en";


return (

<section className="py-20 lg:py-28">

<Container>

<div
className="
grid
items-center
gap-12
lg:grid-cols-2
"
>


<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className="
overflow-hidden
rounded-3xl
"

>

<img

src={storyImage}

alt="K.B.N fabric collection"

className="
h-full
w-full
object-cover
"

/>

</motion.div>



<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className={`
${fontClass}
${language==="fa"
?"text-right"
:"text-left"
}
`}

>


<div
className="
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

{text.about.story.title}

</h2>


<p
className="
mt-6
leading-8
text-neutral-600
lg:text-lg
"
>

{text.about.story.description}

</p>


</motion.div>


</div>

</Container>


</section>

)

}


export default BrandStory;