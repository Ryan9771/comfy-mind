import { useState } from "react";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import getStyle from "../../util/Styles";

interface Props {
  givenDate: Date;
  onChangeDate: (date: Date) => void;
}

function DatePicker({ givenDate, onChangeDate }: Props) {
  const [date, setDate] = useState<Date | undefined>(givenDate);
  const [popOverOpen, setPopOverOpen] = useState<boolean>(false);

  const handleDateChange = (date: Date | undefined) => {
    setDate(date ? date : new Date());
    setTimeout(() => {
      setPopOverOpen(false);
    }, 200); 
    onChangeDate(date ? date : new Date());
  }
 
  return (
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "widthCtrlCtn")}>
        <Popover 
          placement="bottom-start" 
          open={popOverOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler onClick={() => setPopOverOpen(true)}>
            <Input
              label="Select a Date"
              onChange={() => null}
              value={date ? format(date, "PPP") : ""}
              className="flex items-center text-center text-peach text-xl !border-2 !border-dotted lg:text-3xl lg:py-7 cursor-pointer"
              labelProps={{
                className: "text-peach"
              }}
              containerProps={{
                className: ""
              }}
            />
          </PopoverHandler>
          <PopoverContent>
            <DayPicker
              mode="single"
              selected={date ? date : new Date()}
              onSelect={handleDateChange}
              showOutsideDays
              className="border-0"
              classNames={{
                caption: "flex justify-center py-2 mb-4 relative items-center",
                caption_label: "text-sm font-medium text-gray-900",
                nav: "flex items-center",
                nav_button:
                  "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                nav_button_previous: "absolute left-1.5",
                nav_button_next: "absolute right-1.5",
                table: "w-full border-collapse",
                head_row: "flex font-medium text-gray-900",
                head_cell: "m-0.5 w-9 font-normal text-sm",
                row: "flex w-full mt-2",
                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal",
                day_range_end: "day-range-end",
                day_selected:
                  "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                day_today: "rounded-md bg-gray-200 text-gray-900",
                day_outside:
                  "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                day_disabled: "text-gray-500 opacity-50",
                day_hidden: "invisible",
              }}
              components={{
                IconLeft: ({ ...props }) => (
                  <FaArrowLeft {...props} className="h-4 w-4 stroke-2" />
                ),
                IconRight: ({ ...props }) => (
                  <FaArrowRight {...props} className="h-4 w-4 stroke-2" />
                ),
              }}
            />
          </PopoverContent>
        </Popover>
        
      </div>
    </div>
  );
}

const styles = {
  ctn: ["flex", "items-center", "justify-start", "px-5"],
  widthCtrlCtn: ["w-30"],
}

export default DatePicker;