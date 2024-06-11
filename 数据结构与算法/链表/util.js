// 打印链表 函数
function listLB(list) {
    let head = list;
    while (head) {
        console.log('val',head.val);
        head = head.next;
    }
}

module.exports = {
    listLB
}