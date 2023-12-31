import { ko } from "date-fns/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Arrow, SelectDate } from "@/assets";
import "./style.css";

export interface DateSelectorProps {
  selected: Date | null;
  startDate: Date | null;
  endDate: Date | null;
  ChangeDate: (date: [Date | null, Date | null]) => void;
  dateFormat?: string;
}

export default function DateSelector({
  selected,
  startDate,
  endDate,
  ChangeDate,
  dateFormat = "yyyy. MM. dd",
}: DateSelectorProps) {
  return (
    <div className="w-[213px] flex">
      <DatePicker
        className="w-[213px] py-2 pl-3 rounded-[10px] border border-Grayscale-20 text-sm
        "
        selectsRange
        selected={selected}
        startDate={startDate}
        endDate={endDate}
        onChange={ChangeDate}
        dateFormat={dateFormat}
        locale={ko}
        placeholderText="날짜를 선택해 주세요."
        disabledKeyboardNavigation
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="flex justify-between items-center text-base font-bold w-[214px] m-auto">
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <Arrow alt="이전 버튼" />
            </button>
            {getYear(date)}년 {[getMonth(date) + 1]}월
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <Arrow alt="다음 버튼" className="rotate-180" />
            </button>
          </div>
        )}
      />

      <SelectDate alt="날짜 선택하기" className="relative right-5" />
    </div>
  );
}
