import React from "react";

type Items = {
  id: string;
  name: string;
  projectsUrl: string;
};

type Props = {
  pinnedItems: Items[];
};

export default function MyPinnedRepo({ pinnedItems }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 my-5 gap-3">
        {pinnedItems.map((item) => (
          <div
            key={item.id}
            className="card w-96 bg-sky-600 mx-auto text-white shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.projectsUrl}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
