import React, { useEffect, useState } from "react";
import { LOCALSTORE } from "./constant/defualt";
import ReactStars from "react-rating-stars-component";
import AddNewRate from "./addnewRate";

const RatingList = () => {
  const [lists, setList] = useState([]);
  const [addNew, setaddNew] = useState(false);
  const [orderHighest, setOrderHighest] = useState(true);
  const [orderlowest, setOrderlowest] = useState(false);

  useEffect(() => {
    const list = [
      { name: "Lio massy", rate: 5, fill: 0 },
      { name: "CR", rate: 5, fill: 2 },
      { name: "Will smith", rate: 5, fill: 3 },
    ];
    setList(list);
    localStorage.setItem(LOCALSTORE.rating, JSON.stringify(list));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddNewRate = () => {
    setaddNew(true);
  };

  const onSubmitData = (data) => {
    setList([...lists, data]);
    setaddNew(false);
    localStorage.setItem(LOCALSTORE.rating, JSON.stringify(lists));
  };

  const onCancelRate = () => {
    setaddNew(false);
  };

  const ratingChanged = (rate, index) => {
    lists[index].fill = rate;
  };

  const onChangeOrderHighest = (e) => {
    if (e.target.checked) {
      setOrderHighest(e.target.checked);
      setOrderlowest(false);
    }
  };

  const onChangeOrderlowest = (e) => {
    if (e.target.checked) {
      setOrderlowest(e.target.checked);
      setOrderHighest(false);
    }
  };

  return (
    <>
      <div className="m-10">
        <div className="justify-between flex ">
          <div>
            <span className="pr-2"> Sort By: Highest rating first</span>
           
            <input
              type="checkbox"
              onChange={onChangeOrderHighest}
              checked={orderHighest}
            />
            <span className="pr-2 pl-2"></span>
            lowest rating first{" "}
            <input
              type="checkbox"
              onChange={onChangeOrderlowest}
              checked={orderlowest}
            />
          </div>
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onAddNewRate}
            >
              Add New
            </button>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHighest &&
                      lists
                        .sort((a, b) => b.fill - a.fill)
                        .map((item, index) => (
                          <tr class="bg-gray-100 border-b">
                            <>
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.name}
                              </td>{" "}
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <ReactStars
                                  count={item.rate}
                                  value={item.fill}
                                  onChange={(e) => ratingChanged(e, index)}
                                  size={24}
                                  activeColor="#ffd700"
                                />
                              </td>
                            </>
                          </tr>
                        ))}
                    {orderlowest &&
                      lists
                        .sort((a, b) => a.fill - b.fill)
                        .map((item, index) => (
                          <tr class="bg-gray-100 border-b">
                            <>
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.name}
                              </td>{" "}
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <ReactStars
                                  count={item.rate}
                                  value={item.fill}
                                  onChange={(e) => ratingChanged(e, index)}
                                  size={24}
                                  activeColor="#ffd700"
                                />
                              </td>
                            </>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addNew && (
        <AddNewRate onSubmitData={onSubmitData} cancel={onCancelRate} />
      )}
    </>
  );
};

export default RatingList;
