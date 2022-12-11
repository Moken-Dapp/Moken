import Image from "next/image";
import Link from "next/link";
import { Coin } from "../assets/icons/Coin";

import preview from "../assets/preview.png";

export const Property = ({
    imageUri,
    category,
    price,
    address,
    area,
    details,
    amount,
    rip,
    shrink,
}) => {
    console.log(imageUri);
    return (
        <div
            className={`bg-white border-2 border-black rounded-2xl ${
                shrink ? "flex-shrink-0 w-2/3" : "w-full"
            }`}
            // href={`/propriedades/${rip}`}
        >
            <div className="p-2 flex flex-row justify-between items-center">
                <Coin wripth={20} />

                <p># {rip}</p>
            </div>

            {imageUri ? (
                <Image
                    src={imageUri}
                    loader={() => imageUri}
                    alt="Picture of the author"
                    width={300}
                    height={200}
                    layout="responsive"
                />
            ) : (
                <Image
                    src={preview}
                    alt="Picture of the author"
                    width={300}
                    height={200}
                    layout="responsive"
                />
            )}

            <div className="p-4">
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-xl mb-4">
                    A partir de:{" "}
                    <span className="text-2xl font-bold">R$ {price}</span>
                </p>

                <p className="text-gray-700 font-bold mb-4">{address}</p>

                <p className="text-md mb-2">
                    <span>{area}m² </span>
                    {details.map((detail) => `${detail} `)}
                </p>
                {/* <p className="italic font-bold text-sm">
                    Esse token representa {amount * 100}% da propriedade total.
                </p> */}
            </div>
        </div>
    );
};
