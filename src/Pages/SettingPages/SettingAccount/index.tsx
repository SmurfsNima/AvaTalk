import { Select } from "../../../Components"
import { Button } from "symphony-ui"
import { Outlet, useNavigate } from "react-router-dom"

const SettingAccount =() => {
    const navigate = useNavigate();
    return (
        <>
        <div className={`Carbon-ChatDetails-container`}>
            <Outlet></Outlet>
            <div className="flex px-6 items-center space-x-4 absolute  top-8">
                <Button onClick={() => {navigate(-1)}} theme={`Carbon-back`}>
                    <div className={`Carbon-back-Button-vector`}></div>
                </Button>
                <p className={`Carbon-ChatDetails-title`}>Your Account</p>
            </div>            

            <div className="flex flex-col gap-y-5 px-6 mt-[96px] hiddenScrollBar h-[-webkit-fill-available] overflow-y-scroll pb-[300px] pt-[32px]">
                <div className="mb-4">
                    <div className="Carbon-TextField-container w-[100%]">
                        <label className="Carbon-TextField-label ">
                            First Name
                        </label>
                        <div data-testid="input-container" deta-selectbox="false" className=" w-[100%] Carbon-TextField-box ">
                            <input data-testid="input-id" deta-selectbox="true" className="Carbon-TextField-input" type="text" id="textfield76297" placeholder="Enter your first name..." name="FirstName" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="Carbon-TextField-container w-[100%]">
                        <label className="Carbon-TextField-label">
                            Last Name
                        </label>
                        <div data-testid="input-container" deta-selectbox="false" className=" w-[100%] Carbon-TextField-box ">
                            <input data-testid="input-id" deta-selectbox="true" className="Carbon-TextField-input" type="text" id="textfield42095" placeholder="Enter your last name..." name="LastName" />

                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="Carbon-TextField-container w-[100%]">
                        <label className="Carbon-TextField-label" >Account Email</label>
                        <div data-testid="input-container" deta-selectbox="false" className=" w-[100%] Carbon-TextField-box ">

                            <input data-testid="input-id" deta-selectbox="true" className="Carbon-TextField-input" type="email" id="textfield28972" placeholder="Enter your email address..." name="Email" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="Carbon-TextField-container w-[100%]">
                        <label className="Carbon-TextField-label" >Account Phone</label>
                        <div data-testid="input-container" deta-selectbox="false" className=" w-[100%] Carbon-TextField-box ">
                            <div className="Carbon-TextField-selectPhone-container">
                                <img src="https://flagcdn.com/w20/us.png"/>
                                <img className="Carbon-TextField-selectPhone-container-icon" src="./Carbon/bottomVector.svg" alt=""/>
                            </div>
                            <input data-testid="input-id" deta-selectbox="true" className="Carbon-TextField-input" type="phone" id="textfield28972" placeholder="Enter your phone number..." name="Phone" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <Select label="Language" valueElement={<div></div>} placeholder="Select tag..." theme="Carbon">

                    </Select>

                </div>
                <div className="mt-8 mb-4">
                    <button className="Carbon-Button-container">Save Changes</button>
                </div>
                <div className="mt-5 flex items-center cursor-pointer">
                    <p className="text-cyan-500 ms-2">Delete Your Account</p>
                </div>
            </div>         
        </div>

        </>
    )
}
export default SettingAccount;