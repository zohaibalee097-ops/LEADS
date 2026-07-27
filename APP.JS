// ============================================
//  GROVANCE OUTREACH APP — Core Logic
// ============================================

const WA_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

let leadsData = [];

// ============================================
// HARDCODED LEADS DATA (your 34 leads)
// ============================================
const BUILTIN_LEADS = [
    { id:"LD-0001", clinicName:"Dr. Rocco's Specialized Dental Center", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971508376144", service:"Website Maintenance" },
    { id:"LD-0002", clinicName:"المركز الطبي الملكي - جراحة اليوم الواحد", clinicType:"Medical Center", city:"Abu Dhabi", phone:"971566954454", service:"Website Maintenance" },
    { id:"LD-0003", clinicName:"International Center for Dental Excellence", clinicType:"Dentist", city:"Abu Dhabi", phone:"97124477752", service:"Website Maintenance" },
    { id:"LD-0004", clinicName:"Perfect Smile Dental Centre LLC SPC", clinicType:"Dentist", city:"Abu Dhabi", phone:"971563779902", service:"Website Design" },
    { id:"LD-0005", clinicName:"Royal Specialized Dental Clinic Abu Dhabi", clinicType:"Dentist", city:"Abu Dhabi", phone:"971503064500", service:"Website Design" },
    { id:"LD-0006", clinicName:"True Smile Dental Center Abu Dhabi", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971504162866", service:"Website Design" },
    { id:"LD-0007", clinicName:"Dental Experts Center", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"97126810060", service:"Website Design" },
    { id:"LD-0008", clinicName:"Vision Dental Clinic Abu Dhabi", clinicType:"Dentist", city:"Abu Dhabi", phone:"971523122777", service:"Website Design" },
    { id:"LD-0009", clinicName:"FirstDent Dental Center", clinicType:"Dentist", city:"Abu Dhabi", phone:"971585815860", service:"Website Design" },
    { id:"LD-0010", clinicName:"Al Khaja Medical Center LLC", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971509101739", service:"Website Design" },
    { id:"LD-0011", clinicName:"Hollywood Smile Medical Center", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971501556300", service:"Website Design" },
    { id:"LD-0012", clinicName:"Dentacare Centre (Dental & Orthodontics) Hamdan", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971508132044", service:"Website Design" },
    { id:"LD-0013", clinicName:"Your Dental and Medical Center", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"97125855999", service:"Website Design" },
    { id:"LD-0014", clinicName:"Healthy Folks Dental", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971501051044", service:"Website Design" },
    { id:"LD-0015", clinicName:"Appolonia Dentistry for Children", clinicType:"Dentist", city:"Abu Dhabi", phone:"9718007600", service:"Website Design" },
    { id:"LD-0016", clinicName:"Smile First Dental Center", clinicType:"Dentist", city:"Abu Dhabi", phone:"97126226672", service:"Website Design" },
    { id:"LD-0017", clinicName:"Marigold Dental and Orthodontic Clinic", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"97126414020", service:"Website Design" },
    { id:"LD-0018", clinicName:"SMILE ART DENTAL AND ORTHODONTIC", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971508833562", service:"Website Design" },
    { id:"LD-0019", clinicName:"Boston Dental Center", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971502246848", service:"Website Design" },
    { id:"LD-0020", clinicName:"Harley Street Dental Center", clinicType:"Dental implants", city:"Abu Dhabi", phone:"971504928480", service:"Website Design" },
    { id:"LD-0021", clinicName:"Hakeem Dental Center L.L.C", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971503940569", service:"Website Design" },
    { id:"LD-0022", clinicName:"Downtown Healthcare Abu Dhabi", clinicType:"Dentist", city:"Abu Dhabi", phone:"971585178015", service:"Website Design" },
    { id:"LD-0023", clinicName:"Excellency Medical Center", clinicType:"Orthodontist", city:"Abu Dhabi", phone:"971585150971", service:"Website Design" },
    { id:"LD-0024", clinicName:"Al Dana Medical & Dental Centre", clinicType:"Orthodontist", city:"Abu Dhabi", phone:"971504491129", service:"Website Design" },
    { id:"LD-0025", clinicName:"Shield Medical Center Abu Dhabi", clinicType:"Dentist", city:"Abu Dhabi", phone:"971585427977", service:"Website Design" },
    { id:"LD-0026", clinicName:"Oaiss Braces Center", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"97126344343", service:"Website Design" },
    { id:"LD-0027", clinicName:"Smilerite Dental Care", clinicType:"Dentist", city:"Abu Dhabi", phone:"971529133529", service:"Website Design" },
    { id:"LD-0028", clinicName:"Davinci Dental Clinic Abu Dhabi", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971557053081", service:"Website Design" },
    { id:"LD-0029", clinicName:"Tajmeel Clinic - Al Karamah Abu Dhabi", clinicType:"Medical clinic", city:"Abu Dhabi", phone:"971800825", service:"Website Design" },
    { id:"LD-0030", clinicName:"Al Dhafra Dental Specialized Clinic", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971509812969", service:"Website Design" },
    { id:"LD-0031", clinicName:"Zenith Dental Clinic", clinicType:"Dentist", city:"Abu Dhabi", phone:"971544113904", service:"Website Design" },
    { id:"LD-0032", clinicName:"Tabrizi Dentistry - Abu Dhabi", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"97125833328", service:"Website Design" },
    { id:"LD-0033", clinicName:"Gentle Dental & Invisalign Clinic Abu Dhabi", clinicType:"Dental clinic", city:"Abu Dhabi", phone:"971559054147", service:"Website Design" },
    { id:"LD-0034", clinicName:"Harmony Medical Center Abu Dhabi", clinicType:"Dentist", city:"Abu Dhabi", phone:"971800333444", service:"Website Design" },
];

// ============================================
// AUTO-LOAD built-in data on page load
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadBuiltinData();
});

function loadBuiltinData() {
    leadsData = BUILTIN_LEADS.map(lead => {
        const cleanPhone = lead.phone.replace(/[\s\+\-\(\)]/g, '');
        const isTollFree = cleanPhone.includes('800') && cleanPhone.length < 12;
        return {
            ...lead,
            cleanPhone: cleanPhone,
            hasPhone: cleanPhone.length >= 7,
            isTollFree: isTollFree
        };
    });
    updateStats();
    renderTable();
}

// ============================================
// FILE UPLOAD (for loading new data)
// ============================================
document.getElementById('csvFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById('fileInfo').style.display = 'flex';
    document.getElementById('fileName').textContent = file.name;

    const reader = new FileReader();
    reader.onload = function(ev) {
        const text = ev.target.result;
        const tabCount = (text.match(/\t/g) || []).length;
        const commaCount = (text.match(/,/g) || []).length;
        const delimiter = tabCount > commaCount ? '\t' : ',';

        Papa.parse(text, {
            header: false,
            delimiter: delimiter,
            skipEmptyLines: true,
            complete: function(results) {
                processUploadedData(results.data);
            }
        });
    };
    reader.readAsText(file);
});

function processUploadedData(data) {
    leadsData = [];

    data.forEach((row, idx) => {
        if (idx === 0 && row[0] && (row[0].toLowerCase().includes('id') || row[0].toLowerCase().includes('lead'))) return;
        if (row.length < 5) return;

        const id = row[0] || `LD-${idx}`;
        const clinicName = row[4] || 'Clinic';
        const clinicType = row[3] || '';
        const city = row[7] || '';

        let phone = '';
        const col12 = (row[12] || '').trim();
        const col13 = (row[13] || '').trim();

        if (col12 && /\d{8,}/.test(col12.replace(/[\s\+\-]/g, ''))) {
            phone = col12;
        } else if (col13 && /\d{8,}/.test(col13.replace(/[\s\+\-]/g, ''))) {
            phone = col13;
        }

        let cleanPhone = phone.replace(/[\s\+\-\(\)]/g, '');
        if (cleanPhone.startsWith('0')) cleanPhone = '971' + cleanPhone.substring(1);
        const isTollFree = cleanPhone.includes('800') && cleanPhone.length < 12;

        let service = (row[17] || '').trim();
        if (!service) service = 'Web Services';

        leadsData.push({
            id, clinicName, clinicType, city, phone, cleanPhone, service,
            hasPhone: cleanPhone.length >= 7,
            isTollFree: isTollFree
        });
    });

    updateStats();
    renderTable();
}

// ============================================
// UPDATE STATS
// ============================================
function updateStats() {
    const total = leadsData.length;
    const ready = leadsData.filter(l => l.hasPhone).length;
    const noPhone = total - ready;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statReady').textContent = ready;
    document.getElementById('statNoPhone').textContent = noPhone;
}

// ============================================
// RENDER TABLE
// ============================================
function renderTable() {
    const tbody = document.getElementById('tbody');
    const template = document.getElementById('msgTemplate').value;

    if (leadsData.length === 0) {
        tbody.innerHTML = `<tr class="empty-row"><td colspan="7"><div class="empty-state"><div class="empty-icon">📋</div><h3>No Leads</h3></div></td></tr>`;
        return;
    }

    let html = '';
    leadsData.forEach((lead, i) => {
        const message = template.replace(/\{clinic\}/gi, lead.clinicName);
        const waLink = lead.hasPhone && !lead.isTollFree
            ? `https://wa.me/${lead.cleanPhone}?text=${encodeURIComponent(message)}`
            : '#';
        const callLink = lead.hasPhone ? `tel:+${lead.cleanPhone}` : '#';

        // Determine which button to show
        let actionButton = '';
        if (lead.hasPhone && !lead.isTollFree) {
            // Mobile number → WhatsApp button
            actionButton = `<a href="${waLink}" target="_blank" class="btn-wa">${WA_ICON} Send</a>`;
        } else if (lead.hasPhone && lead.isTollFree) {
            // Toll-free → Call button + note
            actionButton = `<a href="${callLink}" class="btn-call">📞 Call</a><div class="toll-note">Toll-free (no WhatsApp)</div>`;
        } else {
            // No phone at all
            actionButton = `<span class="btn-wa disabled">${WA_ICON} No Number</span>`;
        }

        html += `
        <tr>
            <td class="row-num">${i + 1}</td>
            <td>
                <div class="clinic-name">${lead.clinicName}</div>
                <div class="clinic-city">${lead.city}</div>
            </td>
            <td><span class="badge badge-purple">${lead.clinicType}</span></td>
            <td><span class="badge badge-blue">${lead.service}</span></td>
            <td>
                ${lead.hasPhone
                    ? `<span class="phone-display">${lead.phone || lead.cleanPhone}</span>${lead.isTollFree ? ' <span class="badge badge-orange">Toll-Free</span>' : ''}`
                    : `<span class="no-phone">No phone found</span>`}
            </td>
            <td><div class="msg-preview">${message}</div></td>
            <td>${actionButton}</td>
        </tr>`;
    });

    tbody.innerHTML = html;
}
