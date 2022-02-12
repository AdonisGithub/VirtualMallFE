import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex">
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            > 
              <div className="flex relative mt-8 justify-center m-auto text-left transition-all transform  shadow-xl  max-w-full w-[400px] 2xl:w-[625px]  bg-[#5b3866] rounded-md">
                <button className="absolute -top-3 -right-3 text-white w-[25px] h-[25px] bg-[#5b3866] rounded-md" onClick={closeModal}>x</button>
                <div className="relative w-9/12 mt-8">
                  <div className="w-full text-2xl text-white text-center ">
                    Contact Us
                  </div>
                  <div className="w-full justify-center mt-4">
                    <h1 className="text-white text-sm">Name </h1>
                    <input
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="text"
                      name="name"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="w-full justify-center mt-1">
                    <h1 className="text-white text-sm">Company Name </h1>
                    <input
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="text"
                      name="companyname"
                      placeholder="Company Name*"
                    />
                  </div>
                  <div className="w-full justify-center mt-1">
                    <h1 className="text-white text-sm">Email Address </h1>
                    <input
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="w-full justify-center mt-1">
                    <h1 className="text-white text-sm">Phone Number</h1>
                    <PhoneInput
                      inputStyle={{
                        width: "100%",
                        background: "white",
                        color: "black",
                      }}
                      dropdownStyle={{ height: "110px", width: "auto" }}
                    />
                  </div>
                  <div className="w-full justify-center mt-2">
                    <h1 className="text-white text-sm">Message</h1>
                    <textarea
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="message"
                      name="message"
                      rows={4}
                      cols={40}
                      placeholder="Message*"
                    />
                  </div>
                  <div className="w-full justify-center mt-3 mb-12">
                    <button className=" flex w-full h-[34px] items-center justify-center text-white text-base border border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
