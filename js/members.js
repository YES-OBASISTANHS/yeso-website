const members = [
    {
        id:"YESO-0001",
        name:"Juan Dela Cruz",
        grade:"11",
        section:"HUMSS A",
        committee:"Secretariat",
        photo:"images/default-user.png"
    },
    {
        id:"YESO-0002",
        name:"Maria Santos",
        grade:"12",
        section:"STEM A",
        committee:"Finance",
        photo:"images/default-user.png"
    }
];

const tbody = document.getElementById("memberTableBody");

function loadMembers() {

    tbody.innerHTML = "";

    members.forEach(member => {

        tbody.innerHTML += `
        <tr>
            <td><img src="${member.photo}"></td>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.grade}</td>
            <td>${member.section}</td>
            <td>${member.committee}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        `;

    });

}

loadMembers();

/* ==========================
   Member Search
========================== */

const search = document.getElementById("memberSearch");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll("#memberTableBody tr").forEach(row => {

            row.style.display = row.textContent.toLowerCase().includes(value)
                ? ""
                : "none";

        });

    });

}

/* ==========================
   Committee Filter
========================== */

const filter = document.getElementById("committeeFilter");

if (filter) {

    filter.addEventListener("change", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll("#memberTableBody tr").forEach(row => {

            row.style.display =
                value === "" ||
                row.textContent.toLowerCase().includes(value)
                    ? ""
                    : "none";

        });

    });

}
/* ==========================
   ADD MEMBER MODAL
========================== */

const addBtn = document.getElementById("addMemberBtn");
const modal = document.getElementById("memberModal");
const closeModal = document.getElementById("closeModal");

if (addBtn && modal) {

    addBtn.addEventListener("click", () => {

        modal.style.display = "flex";

    });

}

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

const memberForm = document.getElementById("memberForm");

if (memberForm) {

    memberForm.addEventListener("submit", function(e){

        e.preventDefault();

        const newMember = {

            id: "YESO-" + String(members.length + 1).padStart(4,"0"),

            name: document.getElementById("memberName").value,

            grade: document.getElementById("memberGrade").value,

            section: document.getElementById("memberSection").value,

            committee: document.getElementById("memberCommittee").value,

            photo: "images/default-user.png"

        };

        members.push(newMember);

        loadMembers();

        memberForm.reset();

        modal.style.display = "none";

    });

}
