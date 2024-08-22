import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import Image from "next/image";

export function Footer() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="container">
                <div className="lg:flex lg:justify-between"> 
                    <div className="w-full lg:w-2/5 pt-2">
                        <div className="px-6">
                            <a href="#">
                                <Image src="/full-logo.png" alt="PeerPair.dev" width={200} height={200} />
                            </a>

                            <p className="max-w-sm text-gray-500 dark:text-gray-400">Help making this platform even better with your contributions.</p>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline pb-2"> <a className="flex" href="https://github.com/aniketh3014/peerpair.dev" target="_blank" rel="noopener noreferrer"><IconBrandGithub/> GitHub</a></span>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:flex-1 pt-6">
                        <div>
                            <div className="text-center p-4 bg-gray-900 text-white">
                                <p>&copy; 2024 Your Company. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
