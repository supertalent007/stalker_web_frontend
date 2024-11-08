import React from "react";
import { useState } from "react";

const Faqs = [
    {
        question: "How does Stalker ensure my privacy?",
        icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.38503 2.93604V16.2139C14.2331 13.8682 15.536 8.67188 15.568 5.55713L9.38503 2.93604ZM9.38503 0.588867C9.54702 0.588867 9.709 0.625 9.85598 0.690918L16.471 3.49805C17.244 3.8252 17.82 4.58691 17.8161 5.50684C17.799 8.99219 16.365 15.3682 10.313 18.2661C9.72597 18.5469 9.04506 18.5469 8.45803 18.2661C2.40603 15.3682 0.972066 8.99219 0.954976 5.50684C0.95107 4.58691 1.527 3.8252 2.30007 3.49805L8.91799 0.690918C9.06203 0.625 9.22402 0.588867 9.38503 0.588867Z" fill="white" />
        </svg>,
        answer: "Here is the answer"
    },
    {
        question: "What are the crypto payment options?",
        icon: <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.13696 15.9312C9.11206 15.9312 10.952 15.6011 12.34 15.022C12.912 14.7832 13.446 14.4878 13.882 14.126V15.3691C13.882 16.9219 10.861 18.1802 7.13696 18.1802C3.41394 18.1802 0.392944 16.9219 0.392944 15.3691V14.126C0.832031 14.4878 1.36206 14.7832 1.93506 15.022C3.32202 15.6011 5.16296 15.9312 7.13696 15.9312ZM15.006 11.9971V10.873V9.96289C15.673 9.81592 16.288 9.62988 16.8361 9.40088C17.4091 9.16211 17.943 8.86719 18.3781 8.50488V9.74902C18.3781 10.1182 18.203 10.4868 17.855 10.834C17.282 11.4072 16.274 11.8779 14.999 12.1831C15.002 12.124 15.006 12.0601 15.006 11.9971ZM13.882 11.9971C13.882 12.6289 13.38 13.2129 12.533 13.6831C12.47 13.7178 12.406 13.75 12.34 13.7852C11.103 14.4102 9.23096 14.8071 7.13696 14.8071C4.93103 14.8071 2.97095 14.3652 1.74194 13.6831C0.89502 13.2129 0.392944 12.6289 0.392944 11.9971V10.7539C0.832031 11.1152 1.36206 11.4111 1.93506 11.6489C3.32202 12.229 5.16296 12.5591 7.13696 12.5591C9.11206 12.5591 10.952 12.229 12.34 11.6489C12.614 11.5371 12.877 11.4072 13.127 11.2671C13.3409 11.147 13.541 11.0142 13.731 10.873C13.7841 10.834 13.833 10.792 13.882 10.7539V10.873V11.0732V11.9971ZM15.006 8.625C15.006 7.85596 14.634 7.22314 14.1591 6.74902C15.1541 6.59521 16.063 6.34912 16.8361 6.02881C17.4091 5.79004 17.943 5.49512 18.3781 5.13281V6.37695C18.3781 7.05518 17.799 7.68018 16.84 8.16504C16.327 8.4248 15.701 8.646 14.999 8.81494C15.002 8.75098 15.006 8.69189 15.006 8.62793V8.625ZM6.03796 5.85303C6.396 5.8291 6.76501 5.81494 7.13696 5.81494C9.32202 5.81494 11.261 6.24707 12.494 6.91797C13.365 7.39209 13.882 7.98193 13.882 8.625C13.882 8.76514 13.8571 8.90186 13.808 9.03613C13.647 9.5 13.2111 9.9248 12.579 10.2832L12.5649 10.29C12.554 10.2969 12.543 10.2998 12.533 10.3071C11.304 10.9888 9.34302 11.4321 7.13696 11.4321C5.04395 11.4321 3.17102 11.0352 1.93103 10.4092C1.86499 10.3779 1.80103 10.3428 1.73804 10.3071C0.89502 9.83984 0.392944 9.25684 0.392944 8.625C0.392944 7.40186 2.26904 6.35889 4.88904 5.97607C5.25806 5.92383 5.64099 5.88086 6.03796 5.85303ZM18.3781 3.00391C18.3781 3.63721 17.876 4.22021 17.0291 4.69092C16.007 5.25586 14.483 5.65723 12.733 5.77588C12.603 5.71289 12.473 5.65283 12.3361 5.6001C10.952 5.021 9.11206 4.69092 7.13696 4.69092C6.84595 4.69092 6.56104 4.69824 6.27698 4.71191L6.23804 4.69092C5.39099 4.22021 4.88904 3.63721 4.88904 3.00391C4.88904 1.45215 7.91003 0.193848 11.634 0.193848C15.3571 0.193848 18.3781 1.45215 18.3781 3.00391Z" fill="white" />
        </svg>,
        answer: "Here is the answer"
    },
    {
        question: "Is Stalker available on all devices?",
        icon: <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.735 3.04688H2.86597V14.2881H10.735V3.04688ZM7.92395 16.5371C7.92395 16.3872 7.896 16.2441 7.83899 16.106C7.78198 15.9692 7.70105 15.8472 7.59497 15.7422C7.48999 15.6362 7.36804 15.5552 7.22998 15.498C7.09302 15.4409 6.94897 15.4121 6.80005 15.4121C6.651 15.4121 6.50806 15.4409 6.37 15.498C6.23206 15.5552 6.11096 15.6362 6.005 15.7422C5.90002 15.8472 5.81897 15.9692 5.76196 16.106C5.70496 16.2441 5.67603 16.3872 5.67603 16.5371C5.67603 16.686 5.70496 16.8291 5.76196 16.9668C5.81897 17.104 5.90002 17.2261 6.005 17.3311C6.11096 17.437 6.23206 17.5181 6.37 17.5752C6.50806 17.6318 6.651 17.6611 6.80005 17.6611C6.94897 17.6611 7.09302 17.6318 7.22998 17.5752C7.36804 17.5181 7.48999 17.437 7.59497 17.3311C7.70105 17.2261 7.78198 17.104 7.83899 16.9668C7.896 16.8291 7.92395 16.686 7.92395 16.5371ZM0.618042 3.04688C0.618042 1.80713 1.62598 0.798828 2.86597 0.798828H10.735C11.975 0.798828 12.983 1.80713 12.983 3.04688V16.5371C12.983 17.7769 11.975 18.7852 10.735 18.7852H2.86597C1.62598 18.7852 0.618042 17.7769 0.618042 16.5371V3.04688Z" fill="white" />
        </svg>,
        answer: "Here is the answer"
    },
];

const FaqItem = ({ question, answer, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-400 border-opacity-10">
            <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium">{question}</span>
                <span className='transform transition-transform'>
                    {icon}
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="px-4 pb-4 text-gray-400">{answer}</p>
            </div>
        </div >
    );
};

const FaqSection = () => {
    return (
        <div className="w-[350px] md:w-[700px] lg:w-[900px] mx-auto mt-[100px]">
            <h2 className='text-[30px] sm:text-[35px] md:text-[35px]'>
                Stalker FAQs
            </h2>
            {Faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} icon={faq.icon} />
            ))}
        </div>
    );
};

export default FaqSection;