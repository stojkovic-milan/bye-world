import { Link } from '@mui/material'
import React from 'react'
import { Listing } from '../../model/Listing'
import { ListingCard } from '../common/ListingsList/ListingCard'

export default function ListingPage() {

    const testListing: Listing = {
        id: 1,
        closingDate: new Date(Date.now()),
        description: "Ovo je primer opisa posla",
        postingDate: new Date(Date.now()),
        requirements: [],
        title: "Java Senior Developer",
        city: undefined,
        company: undefined
    }

    return (
        <main className="flex-1">
            <div className="relative max-w-7xl mx-auto md:flex md:gap-6 px-4 py-8">

                <div className="grid gap-4 w-full">
                    <div className='print:shadow-none relative shadow-md rounded-lg mb-6 -mx-4 md:mx-auto md:w-full'>
                        <div className='print:bg-transparent print:text-black print:border-none top-0 relative bg-white rounded-t-lg border-b md:z-10'>


                            <div className='flex flex-col md:flex:row border-t-2'>
                                <div className='grid gap-4 flex-1 pt-4 md:pt-8 md:pl-8 pl-4 md:mb-8 mb-4'>
                                    <div>
                                        <h1>
                                            <span className='font-bold text-xl'>.NET Winter Workshop</span>
                                        </h1>
                                        <h4>
                                            <a className='print:text-black print:no-underline link font-semibold'>Levi9 Technology Services</a>
                                        </h4>
                                    </div>
                                    <div className='grid gap-1 pr-4 md:pr-0'>
                                        <div className='flex items-center gap-1'>
                                            <div className='flex items-center gap-1'>
                                                <i className='print:hidden las la-map-marker text-lg leading-none'></i>
                                                <p className='text-sm font-semibold'>Zrenjanin</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <i className='print:hidden las la-clock text-lg leading-none'></i>
                                            <p className='text-sm font-semibold'>25.01.2023</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 flex-wrap'>
                                        <span className='tag lowercase w-auto print:bg-transparent print:text-black print:p-0 tag-xs tag-primary'>
                                            <span>.NET</span>
                                        </span>
                                        <span className='tag lowercase w-auto print:bg-transparent print:text-black print:p-0 tag-xs tag-primary'>
                                            <span>C#</span>
                                        </span>
                                        <span className='tag lowercase w-auto print:bg-transparent print:text-black print:p-0 tag-xs tag-primary'>
                                            <span>CSS</span>
                                        </span>
                                        <span className='tag lowercase w-auto print:bg-transparent print:text-black print:p-0 tag-xs tag-primary'>
                                            <span>Java</span>
                                        </span>
                                    </div>
                                    <div className='print:justify-start print:mx-0 flex items-center justify-center md:mr-24 mt-4 md:mt-8 mb-4 mx-auto md:m-auto order-first md:order-last'>
                                        <a className='hover:opacity-75 bg-white p-2 rounded-md' href='#'>
                                            <img className='object-contain h-[120px] w-[120px]' src='../../public/logo512.png' alt='Levi9 Technology Services'></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white border-t-2'>
                                <div className='__job_content'>
                                    <div className='print:bg-transparent print:text-black print:brorder-none prose p-4 md:p-8 inline-block'>
                                        <h3><strong>Do you want to spend cold days with a great team from Zrenjanin and gain new knowledge and skills?</strong></h3>
                                    </div><p>Our .NET Winter Workshops are giving you the blended learning approach - theory, video materials, and solving tasks with the mentors.</p>
                                    <p>Start: <strong>1st March 2023.<br /></strong>Duration: <strong>6 weeks<br /></strong>Location: <strong>Hybrid (Zrenjanin office + online)</strong></p>
                                    <h3>What do we offer?</h3>
                                    <ul>
                                        <li>Programming in cutting edge technologies - development of modern web applications</li>
                                        <li>Introduction to agile framework for software development - Scrum training</li>
                                        <li>Introduction to Microsoft Azure, OOP design principles, Relational databases</li>
                                    </ul>
                                    <h3>What are we looking for?</h3>
                                    <ul>
                                        <li>Basic knowledge of one of the programming languages (C#, Java, Python...)</li>
                                        <li>Basic knowledge of web technologies (HTML, CSS, optional JS)</li>
                                    </ul>
                                    <p>If you want to participate, all you have to do is to fill out the form and send your CV.</p>
                                </div>
                            </div>
                        </div>
                        <div className="print:hidden sticky bottom-0 bg-white rounded-b-lg flex flex-col md:flex-row items-center justify-center  
                                    border-t p-4">
                            <div className="flex flex-col w-full md:w-auto gap-1">
                                <a className='btn btn-lg apply-btn rounded-lg bg-blue-700 border-2 p-1' href='#'>Apply Here</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-gray-200'>
                <div className='grid gap-4 max-w-7xl mx-auto px-4 py-8'>
                    <p className='font-nold text-xl'>Slicni poslovi</p>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {/* {testListing.map(listing => { */}
                            {/* return ( */}
                                <Link href="#">
                                    <ListingCard listing={testListing}/>
                                </Link>
                            {/* ) */}
                        {/* })} */}

                    </div>

                </div>
            </div>
        </main>
    )
}