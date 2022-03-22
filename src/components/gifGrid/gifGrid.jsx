import GifGridItems from "../gifGridItems/gifGridItems";

import { useFetchGifs } from "../../hooks/useFetchGifs"

export default function GifGrid({ category }) {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card_grid">
                {images.map((img) => (
                    <GifGridItems
                        key={img.id}
                        {...img}
                    ></GifGridItems>
                )
                )}
            </div>
        </>
    )
}
