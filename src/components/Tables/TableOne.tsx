import { useEffect, useState } from 'react';
interface Priority {
  id_priority: number;
  priority_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface ApiResponse {
  message: string;
  datas: Priority[];
}

const TableOne = () => {
  const [apiData, setApiData] = useState<Priority[]>([]);

  useEffect(() => {
    // Lakukan panggilan API dan simpan responsenya dalam state
    fetch('https://simobile.singapoly.com/api/priority-issues')
      .then((response) => response.json())
      .then((data) => setApiData(data.datas))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Priority-issues
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Priority Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Data Created
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Data Updated
            </h5>
          </div>
        </div>

        {apiData.map((data, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === apiData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.priority_name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.created_at}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.updated_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;