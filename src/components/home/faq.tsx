import { Accordion } from "flowbite-react";

const FAQ = () => {
    return (
        <section id="faq-section" className="py-16 px-[15%]">
            <div className="container mx-auto flex flex-col gap-16 lg:flex-row justify-between">
                <div className="header mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-2">Frequently Asked Question</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>Apa saja syarat yang dibutuhkan?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                        dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 max-w-[300px]">
                        Check out this guide to learn how to&nbsp;
                        <a
                        href="https://flowbite.com/docs/getting-started/introduction/"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                        get started&nbsp;
                        </a>
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Berapa minimal sewa mobil lepas kunci?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 max-w-[300px]">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Berapa hari sebelumnya sebaiknya booking sewa mobil</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Apakah ada biaya antar jemput?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Bagaimana jika terjadi kecelakaan?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-[300px]" >
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
            </div>
        </section>

    );
}
export default FAQ;