- Lỗi 1: sử dụng trim để xử lí khoảng trắng và touppercase để chuẩn hóa dữ liệu nhưng lại không có biến lưu trữ nhưng cả trim và touppercase đều trả về một chuỗi - không thay đổi chuỗi gốc nên khi tiến hành kiểm tra xử lí trên chuỗi gốc thì kết quả trả về sẽ sai, cách xử lí là tạo thêm một biến để lưu trữ dữ liệu đã chuẩn hóa ở trong code fixx lỗi là "standardrawTicketCode"

- Lỗi 2: do việc không tạo biến lưu trữ dữ liệu sau chuẩn hóa dẫn đến bước kiểm tra phải kiểm tra trực tiếp trên dữ liệu gốc dẫn đến kết quả sai. cách xử lí thay đổi "rawTicketCode" trong 
    const isValidPrefix = rawTicketCode.startsWith("MED-");
    const departmentCode = rawTicketCode.slice(4, 7);
    const isPriority = rawTicketCode.includes("-UT");
    const displayCode = rawTicketCode.replaceAll("-", " | ");
thành "standardrawTicketCode"

- Lỗi 3: const departmentCode = rawTicketCode.slice(4, 7); khoảng cách cắt chuỗi ở đây không đúng lúc này chỉ lấy được 4-5-6 chỉ lấy được 3 thay vì 4 nên khi in ra khoa sẽ bị thiếu, cách khắc phục const departmentCode = rawTicketCode.slice(4, 8) chuyển 7 thành 8 để đảm bảo lấy đúng 4 kí tự.

- Bảng test case:
    |---|---|---|---|
    |Trường hợp kiểm thử|Dữ liệu đầu vào|Kết quả sai|Kết quả mong đợi|
    |---|---|---|---|
    |1. Theo đúng dữ liệu ban đầu của đề bài|const rawTicketCode = "   med-card-0428-ut   "|"Mã phiếu hợp lệ" = false, "Khoa điều trị" = car, "Chuỗi in phiếu" = "med - car - 0428 - ut"|"Mã phiếu hợp lệ" = True, "Khoa điều trị" = CARD, "Chuỗi in phiếu" = "med - CARD - 0428 - UT" |
    |2. Thay đổi dữ liệu đầu vào không có khoảng trắng|const rawTicketCode = "med-card-0428-ut"|"Mã phiếu hợp lệ" = false, "Khoa điều trị" = car, "Chuỗi in phiếu" = "med - car - 0428 - ut"|"Mã phiếu hợp lệ" = True, "Khoa điều trị" = CARD, "Chuỗi in phiếu" = "med - CARD - 0428 - UT" |
    |---|---|---|---|

* Do để dữ liệu trong bảng có thể in ra đầy đủ nên em xin phép thay đổi dấu "|" trên dữ liệu đúng thành "-"