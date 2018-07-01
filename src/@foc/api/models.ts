export const DEFAULT_PICTURE_URL = 'assets/images/avatars/profile.jpg';

export enum MessageType {
    TEXT = <any>'text',
    LOCATION = <any>'location',
}
interface UserShortObject {
    _id: string;
    name: string;
    imageId: string;
}
interface SettingValue {
    value: boolean;
    scheduled: number;
}
interface DeviceSetting {
    promotionLead?: SettingValue;
    newChatThread?: SettingValue;
    newQuote?: SettingValue;
    quoteView?: SettingValue;
    quotedValueUpdate?: SettingValue;
    quoteAccepted?: SettingValue;
    quoteAcceptedCSR?: SettingValue;
    quoteAcceptedSP?: SettingValue;
    quoteRejected?: SettingValue;
    quoteShortlisted?: SettingValue;
    newLead?: SettingValue;
    newUPLead?: SettingValue;
    UPLead?: SettingValue;
    leadView?: SettingValue;
    leadPublishCustomer?: SettingValue;
    leadFavorite?: SettingValue;
    newReview?: SettingValue;
    reviewUpdated?: SettingValue;
    newComment?: SettingValue;
    commentUpdate?: SettingValue;
    newReviewLike?: SettingValue;
    newCommentLike?: SettingValue;
    newPayment?: SettingValue;
}
interface NotificationDoc {
    _id?: string;
    leadId?: string;
    leadTitle?: string;
    quotedValue?: number;
    createdAt?: Date;
    updatedAt?: Date;
    customer?: {
        _id?: string;
        name?: string;
    };
    owner?: {
        _id?: string;
        name?: string;
        imageId?: string;
    };

}
interface CHATMEMBER {
    _id: string;
    name: string;
    avatar?: string;
    unread?: number;
    deleted?: boolean;
}
interface SHORTJOB {
    _id: string;
    title: string;
}
interface SHORTIMAGE {
    id?: string;
    url?: string;

}
interface ADDR {
    long_name: string;
    short_name: string;
    types: Array<string>;
}


declare global {
    interface QUERYOPTIONS {
        limit?: number;
        skip?: number;
        sort?: any;
        filter?: any;
    }
    interface SERVICE {
        _id?: string;
        name?: string;
        title?: string;
        meta_title?: string;
        description?: string;
        meta_description?: string;
        detail?: string;
        relatedServiceIds?: Array<string>;
        publish?: boolean;
        businessTypeIds?: Array<string>;
        priceListId?: string;
        icon?: string;
        creator?: string;
        categoryIds?: Array<string>;
        tags?: Array<string>;
        createdAt?: Date;
        updatedAt?: Date;
        instant: boolean;
        image?: {
            id: string;
            url: string;
            alt: string;
        };
    }

    interface CATEGORY {
        _id?: string;
        name?: string;
        description?: string;
        image?: {
            id: string;
            url: string;
            alt: string;
        };
    }
    interface TotalSent {
        unread?: {
            quotes?: number,
            leads?: number,
            messages?: number,
            emails?: number,
            reviews?: number,
            tasks?: number,
        };
        updated?: {
            quotes?: number,
            leads?: number,
            messages?: number,
            emails?: number,
            reviews?: number,
            tasks?: number,
        };
        total?: {
            quotes?: number,
            shortlisted?: number,
            rejected?: number,
            leads?: number,
            jobs?: number,
            messages?: number,
            emails?: number,
            reviews?: number,
            tasks?: number,
            saving?: number,
        };
    }
    interface TOTALS {
        _id?: string;
        userId?: string;
        sent?: TotalSent;
        recieved?: TotalSent;
        notifications: {
            chatThreads: number;
            leads: number;
            quotes: number;
            reviews: number;
        };
    }


    // tslint:disable-next-line:class-name
    interface toastr {
        error(message: string, title: string, options: Object);
        info(message: string, title: string, options: Object);
        warning(message: string, title: string, options: Object);
        success(message: string, title: string, options: Object);
    }

    interface IMAGE {
        _id?: string;
        complete?: boolean;
        extension?: string;
        name?: string;
        progress?: number;
        size?: number;
        store?: string;
        token?: string;
        type?: string;
        uploadedAt?: Date;
        uploading?: boolean;
        url?: string;
        userId?: string;
        path?: string;
        thumb40Url?: string;
        thumb96Url?: string;
    }
    interface THUMB {
        _id?: string;
        complete?: boolean;
        extension?: string;
        name?: string;
        progress?: number;
        size?: number;
        store?: string;
        token?: string;
        type?: string;
        uploadedAt?: Date;
        uploading?: boolean;
        url?: string;
        userId?: string;
        path?: string;
        originalStore?: string;
        originalId?: string;
    }


    interface POINT {
        coordinates: Array<number>;
        type?: string;
    }
    interface FOCLOCATION {
        loc?: POINT;
        title?: string;
        name?: string;
        buildingName?: string;
        imageId?: string;
        imageUrl?: string;
        state?: ADDR;
        country?: ADDR;
        selected?: boolean;
        city?: ADDR;
        premise?: ADDR;
        subStreet?: ADDR;
        street?: ADDR;
    }
    interface CREDITCARD {
        cardNumber: number;
        cardHolder: string;
        expiryDate: Date;
        type?: string;

    }
    interface QUESTION {
        adminKey: string;
        answer?: string;
        description?: string;
        customerDescription?: string;
        supplierDescription?: string;
        requiredCheck?: boolean;
        questionType?: string;
        options?: Array<Object>;
        enableCL?: boolean;
        conditions?: Array<Object>;
    }
    interface ValidationMessages {
        required: any;
    }
    interface PAGES {
        title?: string;
        questions: Array<QUESTION>;
    }
    interface FORM {
        _id?: string;
        title?: string;
        createdAt?: Date;
        pages: Array<PAGES>;
        deleted?: boolean;
        folder?: string;
        owner?: string;
        updatedAt?: Date;
        updater?: string;
        serviceIds?: Array<string>;

    }
    // tslint:disable-next-line:class-name
    interface LEAD_VOUCHER {
        promotionId: string;
        package: PRICELIST;
        quantity: number;
        usedQty: number;
        expiry: Date;
        tax: number;
        delivery: number;
        paidTotal: number;
        vouchers: [{
            id: string;
            used: boolean;
            usedDate: Date;
            by: string;
            phone: string;
            status: string;
        }];
    }
    interface LEAD {
        _id?: string;
        title?: string;
        description?: string;
        serviceId?: string;
        formId?: string;
        owner?: string;
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
        favorites?: Array<string>;
        numberSeenBy?: Array<string>;
        cart?: CART;
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
        images?: Array<SHORTIMAGE>;
        readBy?: Array<string>;
        quotedBy?: Array<string>;
        quotes?: Array<string>;
        shortList?: Array<string>;
        publisher?: string;
        bitlyUrl?: string;
        bitlyCustomerUrl?: string;
        pages?: Array<PAGES>;
        paymentSuccess?: boolean;
    }


    interface QUOTE {
        _id?: string;
        quotedValue?: number;
        quoteMessage?: string;
        createdAt?: Date;
        deleted?: boolean;
        leadId?: string;
        leadTitle?: string;
        customer?: UserShortObject;
        shortListed?: boolean;
        status?: string;
        read?: boolean;
        owner?: UserShortObject;
        updatedAt?: Date;
    }
    interface MESSAGE {
        _id?: string;
        threadId?: string;
        senderId?: string;
        recieverId?: string;
        text?: string;
        image?: any;
        quote?: QUOTE;
        location?: FOCLOCATION;
        mesgType?: string;
        createdAt?: Date;
    }
    interface THREAD {
        _id?: string;
        chatType?: string;
        picture?: any;
        messageCount?: number;
        lastMessage?: MESSAGE;
        members?: Array<CHATMEMBER>;
        memberIds?: Array<string>;
        job?: SHORTJOB;
        updatedAt?: Date;
        createdAt?: Date;
    }
    interface PRICELIST {
        title?: string;
        description?: string;
        originalPrice?: number;
        offerPrice?: number;
        discount?: number;
        brands?: string;
        pages?: Array<{
            questions: Array<QUESTION>,
        }>;
        default?: boolean;
        id?: string;
    }
    interface PROMOTION {
        // Identification
        _id?: string;
        slug?: string;
        supplierId?: string;

        // Clasification
        category?: string;
        serviceId?: string;
        supplier?: {
            email?: string;
            number?: string;
        };

        // Validation
        createdAt?: Date;
        updatedAt?: Date;
        buyLimit?: number;
        expiryVoucher?: Date;
        featured?: boolean;
        published?: boolean;
        publishedBy?: string;
        totalSales?: number;
        validFrom?: Date;
        validSales?: number;
        validTill?: Date;


        // SEO
        /**
         * metaTitle should be 35 to 70 chars long.
         * https://moz.com/learn/seo/title-tag
         */
        title?: string;
        /**
         * metaDescription should be 200 to 300 chars long.
         * https://www.compose.agency/insights/meta-description-length-2018
         */
        description?: string;
        /**
         * metaKeywords should be comma seperated string
         * First keyword should be the main keyword.
         */
        keywords?: string;

        // Page Content
        shortTitle?: string; // pageTitle
        detailTitle?: string; // pageDescription
        detailDescription?: string; // Highlights --  highlights
        terms?: string; // Terms and Condition
        address?: {
            locations: Array<FOCLOCATION>;
            locationUrl: string;
            locationImageId: string;
        };
        images?: Array<{
            id?: string;
            url?: string;
            caption?: string;
        }>;

        fbAd?: {
          title?: string;
          description?: string;
        };
        googleAd?: {
          displayNetwork?: boolean;
          search?: boolean;
          gpc?: string;
        };
        priceLists?: Array<PRICELIST>;
        relatedPromotions?: Array<string>;
        socialImages?: Array<{
            id?: string;
            url?: string;
            caption?: string;
        }>;
        video?: {
            url?: string;
          videoType?: string;
          videoAdd?: boolean;
          image?: any;
        };
      }
    interface SETTING {
        _id?: string;
        userId?: string;
        notifications?: {
            email?: DeviceSetting;
            mobile?: DeviceSetting;
            desktop?: DeviceSetting;
        };
    }
    interface NOTIFICATION {
        _id?: string;
        type?: string;
        typeId?: string;
        for?: string;
        forId?: string;
        recipient?: string;
        recipientIds?: Array<string>;
        sender?: string;
        senderId?: string;
        senderName?: string;
        fixDepartment?: string;
        title?: string;
        body?: string;
        plain?: string;
        subject?: string;
        dpImageId?: string;
        active?: boolean;
        read?: boolean;
        updated?: boolean;
        isDeleted?: boolean;
        url?: string;
        createdAt?: Date;
        data?: {
            docId?: string;
            docCollection?: string;
            previous?: any;
            url?: string;
            doc?: NotificationDoc;
        };
        state?: {
            stateName?: string;
            stateParams?: {
                jobId?: string;
            }
        };
    }

    interface JOURNALENTRY {
        /**
         * Ledger Account ID e.g 1000_TELR_BANK or sales_spid
         */
        _ac: string;
        /**
         * Parent Ledger Account ID e.g 1000_TELR_BANK, 2000_SALES
         */
        _pac?: string;
        /**
         * description of transaction.
         */
        description?: string;
        /**
         * + if debit - if credit.
         */
        amount: number;
        /**
         * true if credit false if debit.
         */
        credit: boolean;
        /**
         * Item Id e.g promotionId or credit record Id etc.
         */
        itemId?: string;
    }

    interface GENERALJOURNAL {
        /**
         * Sequential Id
         */
        _id?: string;
        /**
         * Period of Transaction (Good for keeping the DB Performance)
         */
        period: number;
        /**
         * Voucher ID if available or related.
         */
        _vid?: string| Array<string>;
        /**
         * CartId if available or related.
         */
        _cid?: string;
        /**
         * Item Id e.g promotionId or credit record Id etc.
         */
        itemId?: string;
        /**
         * SP UserId For all Purchase, Redemption, Validated and FundsTransfer entries.
         *
         */
        userId?: string;
        /**
         * Type of General Journal Entries following are the Only possibilities:
         * Purchase, Redemption, Validated, FundsTransfer and GENERAL
         */
        type: 'Purchase' | 'Redemption' | 'Validated' | 'FundsTransfer' | 'General';
        /**
         * Posting Date
         */
        date?: Date;
        /**
         * Creation Date
         */
        createdAt: Date;
        /**
         * Posted or not.
         */
        post?: boolean;
        /**
         * Posted By userId
         */
        postedBy?: string;
        /**
         * If there were errors posting.
         */
        hasErrors?: boolean;
        /**
         * Amount Total
         */
        amount: number;
        /**
         * Description
         */
        description: string;
        /**
         * Journal Entry List
         */
        entry: Array<JOURNALENTRY>;
        /**
         * Set to true When transfering balance from AP_DUE to AP_TRANSFERABLE and false for all redemption transactions
         */
        settelled?: boolean;
    }

    interface LEDGER {
        // userId of SP, textual unique ID for Bank/Sales etc e.g 1000_TELR_BANK, 2000_SALES, 3000_AP, 5000_COS
        _id?: string;
        // Parent Account
        _pac?: string;
        isChild?: true;
        // Descriptive name.
        name: string;
        type: string;

        lastTransactionDate?: Date;
        openingDate: Date;

        openingBalance: number;
        currentBalance: number;
        periodHistory: [
            {
                period: number;
                debit: number;
                credit: number;
                balance: number;

            }
        ];

    }

    // tslint:disable-next-line:class-name
    interface LEDGER_TRANSACTION {
        _id?: string;
        _ac: string;
        _refId: string; // Reference Id of the Jornal Entry.
        itemId?: string;
        date: Date;
        debit: number;
        credit: number;
        balance: number;
        description: string;
    }


    // tslint:disable-next-line:class-name
    interface AUTO_SEQUENCE {
        _id?: string;
        sequence_value: number;
        updatedAt?: Date;
    }

    interface IMAGECROPSETTINGS {
        width?: number;
        height?: number;
        croppedWidth?: number;
        croppedHeight?: number;
        canvasWidth?: number;
        canvasHeight?: number;
        minWidth?: number;
        minHeight?: number;
        rounded?: boolean;
        keepAspect?: boolean;
        noFileInput?: boolean;
        compressRatio?: number;
        preserveSize?: boolean;
        dynamicSizing?: boolean;
        cropperClass?: string;
        croppingClass?: string;
    }

    interface REVIEW {
        _id?: string;
        aggregateValue: number;
        ratingA: number;
        ratingB: number;
        ratingC: number;
        ratingD: number;
        ratingE: number;
        description?: string;
        userId: string;
        for: string;
        owner: {
            _id: string;
            type: string;
        };
        images?: Array<any>;
        datePublished: Date;
        views?: number;
        updatedAt?: Date;
        jobId?: string;
    }

    interface ABOUT {
        type: string;
        typeId: string;
    }
    interface REPEATINTERVAL {
        type: ['day' | 'week' | 'month'];
        interval: number;
        time: Date;
        weekDay: Date;
        monthDay: Date;
    }
    interface CALLS {
        userId?: string;
        csrId?: string;
        description?: string;
        type?: ['oubtbound' | 'inbound'];
        about?: ABOUT;
        createdAt?: Date;
    }
    interface TASKS {
        subject?: string;
        description?: string;
        responsible?: Array<string>;
        createdBy?: Date;
        deadline?: Date;
        about?: ABOUT;
        images?: IMAGE;
        repeatTask?: boolean;
        repeatInterval?: REPEATINTERVAL;
        reminderId?: string;
    }
    interface REMINDERS {
        date: Date;
        to: string;
        type: ['sms' | 'email' | 'notify' | 'chat'];
        createdBy: string;
        createdAt: Date;
    }
    interface MEETING {
        subject: string;
        location: FOCLOCATION;
        date: Date;
        with: string;
        description: string;
        minutes: string; // as HTML
        images: Array<IMAGE>;
        about: ABOUT;
        createdBy: string;
        createdAt: Date;
        responsible: [string];
    }
    interface NOTES {
        content: string;
        images: Array<IMAGE>;
        createdBy: string;
        createdAt: Date;
        link: string;
    }
    interface ACTIVITY {
        type: string;
        typeId: string;
        createdAt: Date;
        createdBy: string;
        owner: string;
        activityType: string;
    }
    interface LEADPACKAGE {
        _id?: string;
        en: LEADPCKGLANG;
        ar?: LEADPCKGLANG;
        qty: number;
        minQty: number;
        maxQty: number;
        unitPrice: number;
        serviceIds: [string];
        imageId?: string;
        video?: {url: string, image: {
            id?: string;
            url?: string;
        }};
        offer: any;
        createdAt: Date;
        updatedAt?: Date;
        createdBy: string;
        updatedBy?: string;
    }
    interface LEADPCKGLANG {
        name: string;
        cTitle: string;
        sTitle: string;
        description: any;
    }

    interface CART {
        _id?: string;
        userId?: string;
        service?: string;
        cartId?: string;
        items?: Array<CARTITEM>;
        title?: string;
        subTotal?: number;
        total?: number;
        discount?: number;
        paymentSuccess?: boolean;
        paymentType?: string;
        couponId?: string;
        createdAt?: Date;
        updatedAt?: Date;
        orderRef?: string;
        location?: FOCLOCATION;
        for?: string;
        forId?: string;
    }
    interface CARTITEM {
        id: string;
        title: string;
        description: string;
        qty: number;
        unitPrice: number;
        imageId: string;
        offer: any;
        unit?: string;
        
    }
    interface PACAKGES {
        _id?: string;
        itemName?: string;
        price?: number;
        credits?: number;
        active?: boolean;
        offer?: boolean;
        features?: Array<{}>;
        sold?: number;
        createdAt: Date;
        offerDescription?: string;
        loyalityCredits?: number;
        updatedAt?: Date;
    }
    interface CREDIT {
        _id?: string;
        userId?: string;
        createdAt?: Date;
        updatedAt?: Date;
        credit?: number;
    }
}
