export class LeadModel{
    _id?: string;
    title?: string;
    serviceId?: string;
    formId?: string;
    owner?: string;
    cart?: CART;
    assignedTo?: {
        owner: string;
        quote: string;
        price: number;
        assignedDate: Date;
    };
    scheduleDate?: Date;
    // Promotion
    fromPromotion?: boolean;
    promotion?: LEAD_VOUCHER;
    source?: string;
    duplicate?: boolean;
    duplicateOf?: string;
    detail?: string;
    publish?: boolean;
    status?: string;
    folder?: string;
    location?: FOCLOCATION;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: Array<Object>;
    views?: number;
    images?: Array<{
        id?: string;
        url?: string;
    }>;
    readBy?: Array<string>;
    quotedBy?: Array<string>;
    quotes?: Array<string>;
    shortList?: Array<string>;
    publisher?: string;
    bitlyUrl?: string;
    bitlyCustomerUrl?: string;
    pages?: Array<PAGES>;
    paymentSuccess?: boolean;
    
    constructor(userId: string, formObj: FORM, serviceId: string) {
        this._id = undefined;
        this.formId = formObj._id;
        this.serviceId = serviceId;
        this.createdAt = new Date();
        this.owner = userId;
        this.images = [];
        this.publish = false;
        this.quotedBy = [];
        this.quotes = [];
        this.readBy = [];
        this.views = 0;
        this.status = 'open';
    }    
    updateLead(questions: QUESTION[], title: string, detail: string, images:Array<{id?: string, url?:string}>, _location:FOCLOCATION, scheduleDate: Date) {
        this.updatedAt = new Date();
        this.pages = [{questions: questions}];
        this.title = title;
        this.detail = detail;
        this.location = _location;
        this.scheduleDate = scheduleDate;
        this.images = images;
    }
}