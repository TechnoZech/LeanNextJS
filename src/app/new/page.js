'use client'
import { useState } from "react";

export default function page() {
    const [data, setData] = useState('');
    let name;
    let value;
    function saveData(e){ //keeping HTML form data
        name = e.target.name;
        value = e.target.value;
        setData((oldData)=>({...oldData, [name] : value}));
    }

    async function display(e){ //onSubmit passing HTML data to api
        e.preventDefault();
		const res = await fetch('/api/getTitle', {
			method: 'POST',
			body: JSON.stringify({data}),
		});
		const {title}  = await res.json();
		console.log('Final res=> ',title);

		// let titles = [];
        // const linksArray = data.links.split(",");
        // for(let i=0; i<linksArray.length; i++){
        //     console.log(linksArray[i]);
        // }
        setData({ //reset the form
            links: "",
        })
    }


	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
						Enter Details
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="links"
								className="block text-md font-medium leading-6 text-white-900"
							>
								Enter Data
							</label>
							<div className="mt-2">
								<textarea
                                    onChange={saveData}
                                    value={data.links}
									id="links"
									name="links"
									type="text"
                                    autoComplete="off"
									className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
                                onClick={display}
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
