import Image from "next/image"
import RunningOtzyvy from "./RunningOtzyvy"

const Otzyvy = () => {
	return (
		<section className='py-14 my-10 relative z-0 w-full' id="otzyvy">
			<div className='container mx-auto'>

				<div className='sd:max-w-[65vw] xz:max-w-full'>

			
					<h2 className='sd:text-6xl xz:text-5xl mt-8 text-white'>
						Что говорят клиенты о нашем автосалоне
					</h2>
				</div>
			</div>

			<div className='xz:mt-6 sd:mt-12'>
				<RunningOtzyvy />
			</div>

		</section>
	)
}

export default Otzyvy