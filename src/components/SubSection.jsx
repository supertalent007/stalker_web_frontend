import React from "react";
import { Link } from "react-router-dom";

const SubSection = ({ subSection, order }) => {
    return (
        <div className='grid md:grid-cols-2 gap-[50px] py-[50px] items-center md:px-[50px] sm:px-[15px] w-full'>
            <div className={`col-span-1 justify-center flex ${order % 2 === 1 ? 'order-1 md:order-2' : 'order-1'}`}>
                <img className="max-h-[530px]" src={subSection?.imageUrl} alt="sub section" loading="lazy" />
            </div>

            <div className={`col-span-1 max-w-[500px] justify-center flex flex-col ${order % 2 === 1 ? 'order-1' : 'order-2'}`}>
                <h2 className='text-[30px] sm:text-[35px] md:text-[40px] font-[russo] mb-5'>{subSection?.title}</h2>

                <p className='mb-5'>{subSection?.subTitle}</p>
                {subSection?.lists?.length ?
                    <>
                        {
                            subSection?.lists.map((listData, index1) => {
                                return (
                                    <>
                                        <p className='mb-5' key={`sub_section_${index1}`}>{listData?.list_title}</p>
                                        <ul className='flex-col space-y-[30px]'>
                                            {
                                                listData?.list_items.map((item, index2) => {
                                                    return (
                                                        <li key={`list_data_${index2}`}>
                                                            <div className='flex gap-3 items-center'>
                                                                {item?.icon}

                                                                <h4>
                                                                    {item?.item_title}
                                                                </h4>
                                                            </div>
                                                            <p className='ml-7'>
                                                                {item?.item_description}
                                                            </p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </>
                                )
                            })
                        }

                    </> : ''
                }

                <p className='mb-5'>{subSection?.description}</p>

                <ul className="flex flex-wrap gap-4">
                    <li>
                        <Link to="#">
                            <img
                                src="/assets/buttons/google.png"
                                alt="android app"
                                className="transform transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img
                                src="/assets/buttons/apple.png"
                                alt="ios app"
                                className="transform transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    </li>
                </ul>


            </div>

        </div>
    )
}

export default SubSection;