import { DeleteIcon, offerCardPhoto } from "@/assets";
import { ClockIcon, HandIcon, UserIcon } from "./Icons";
import { ScrollArea } from "@/components/ui/scroll-area";

const ItemCard = () => {
  const products = [
    {
      status: "Expired",
      title: "NERUBIAN CONQUEROR BUNDLE",
      region: "EU",
      mode: "Self play",
      difficulty: "Heroic",
      objective: "Single Fyrakk kill",
      delivery_time: "1 day",
      start_time: "30 Jul 2024, 02:15 (GMT +6.0)",
      seller: "OvergearSales",
      price: "$20.99",
    },
    {
      status: "In Progress",
      title: "NERUBIAN CONQUEROR BUNDLE",
      region: "EU",
      mode: "Recovery",
      difficulty: "Heroic",
      objective: "Single Fyrakk kill",
      delivery_time: "1 day",
      start_time: "30 Jul 2024, 02:15 (GMT +6.0)",
      seller: "OvergearSales",
      price: "$20.99",
    },
    {
      status: "Expired",
      title: "NERUBIAN CONQUEROR BUNDLE",
      region: "EU",
      mode: "Self play",
      difficulty: "Heroic",
      objective: "Single Fyrakk kill",
      delivery_time: "1 day",
      start_time: "30 Jul 2024, 02:15 (GMT +6.0)",
      seller: "OvergearSales",
      price: "$20.99",
    },
    {
      status: "In Progress",
      title: "NERUBIAN CONQUEROR BUNDLE",
      region: "EU",
      mode: "Self play",
      difficulty: "Heroic",
      objective: "Single Fyrakk kill",
      delivery_time: "1 day",
      start_time: "30 Jul 2024, 02:15 (GMT +6.0)",
      seller: "OvergearSales",
      price: "$20.99",
    },
    {
      status: "In Progress",
      title: "NERUBIAN CONQUEROR BUNDLE",
      region: "EU",
      mode: "Self play",
      difficulty: "Heroic",
      objective: "Single Fyrakk kill",
      delivery_time: "1 day",
      start_time: "30 Jul 2024, 02:15 (GMT +6.0)",
      seller: "OvergearSales",
      price: "$20.99",
    },
  ];

  return (
    <ScrollArea className="h-[700px]">
      <div className="flex flex-col gap-6">
        {products?.map((product, idx) => {
          return (
            <div
              key={`index - ${idx}`}
              className="bg-backgroundLight p-5 rounded-xl flex items-start gap-[26.79px]"
            >
              <div className="w-[220px] h-[176px] relative">
                <img
                  src={offerCardPhoto}
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
                <p className="absolute top-2 left-2 bg-white/10 backdrop-blur-sm text-xs border py-[1px] border-white/30 px-2 rounded-full">
                  {product?.status}
                </p>
              </div>
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-2xl font-semibold uppercase">
                    {product?.title}
                  </h3>
                  <p className="text-base">
                    {product?.region}.{" "}
                    <span className="text-primaryColor">{product?.mode}</span>.
                    {product?.difficulty} .{" "}
                    <span className="font-semibold">{product?.objective}</span>
                  </p>

                  <p className="flex items-center gap-2 font-thin">
                    <HandIcon />
                    <span>{product?.delivery_time} delivery </span>
                  </p>
                  <p className="flex items-center gap-2 font-thin ">
                    <span className="opacity-50">
                      <ClockIcon />
                    </span>
                    <span>Start time: {product?.start_time}</span>
                  </p>
                  <p className="flex items-center gap-2 font-thin ">
                    <span className="opacity-50">
                      <UserIcon />
                    </span>
                    <span>Sold by {product?.seller}</span>
                  </p>
                </div>
                <div className="flex flex-col items-end  justify-between h-[170px]">
                  <h2 className="text-2xl text-primaryColor font-semibold">
                    {product?.price}
                  </h2>
                  <p className="border border-[#E80404] p-2 cursor-pointer ">
                    <img src={DeleteIcon} alt="" />{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default ItemCard;
