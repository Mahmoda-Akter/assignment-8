import { authClient } from '@/lib/auth-client';
import React from 'react';
import { BiEdit } from "react-icons/bi";

const Updateuser = () => {

    const onsubmits =async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value
        // console.log(name,url,"from submit")
        await authClient.updateUser({
            name,
            image:url
        })
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}><BiEdit /> Update profile</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={onsubmits}>
                        <fieldset className="fieldset   rounded-box w-xs  p-4">
                            <legend className="fieldset-legend text-2xl">Update user</legend>

                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Enter your name" />

                            <label className="label">Image url</label>
                            <input type="text" name='url' className="input" placeholder="Enter image url" />

                            <button type='submit' className="btn btn-neutral mt-4">Save</button>
                        </fieldset>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Updateuser;