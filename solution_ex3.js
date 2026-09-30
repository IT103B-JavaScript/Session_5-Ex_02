const rawTicketCode = "   med-card-0428-ut   ";

let standardrawTicketCode = rawTicketCode.trim().toUpperCase()

const isValidPrefix = standardrawTicketCode.startsWith("MED-");
const departmentCode = standardrawTicketCode.slice(4, 8);
const isPriority = standardrawTicketCode.includes("-UT");
const displayCode = standardrawTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Chuỗi in phiếu:", displayCode);