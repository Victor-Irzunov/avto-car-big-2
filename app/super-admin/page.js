"use client"
import CreateCarForm from "@/components/FormsAdmin/CreateCarForm";
import EditCarForm from "@/components/FormsAdmin/EditCarForm";
import GetCarForm from "@/components/FormsAdmin/GetCarForm";
import { useState } from "react";

const page = () => {
	const [isActive, setIsActive] = useState(false)
	return (
		<section className="py-20">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h1 className='sd:text-3xl xz:text-xl uppercase'>
						Страница администратора
					</h1>
				</div>

				<div className='mt-10'>

					<div className="collapse collapse-plus border border-base-300 bg-slate-100">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium text-secondary">
							Добавьть машину
						</div>
						<div className="collapse-content">
							<CreateCarForm />
						</div>
					</div>

					<div className="collapse collapse-plus border border-base-300 bg-slate-100 mt-6">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium text-secondary">
							Редактировать товар
						</div>
						<div className="collapse-content">
							<GetCarForm setIsActive={setIsActive} />

							<div className='mt-10'>
								{isActive
									?
									<EditCarForm />
									:
									null
								}
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
	)
}

export default page;