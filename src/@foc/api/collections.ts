import { MongoObservable } from 'meteor-rxjs';
let Mongo: any = Package['mongo'].Mongo;
const UploadFS = Package['jalik:ufs'].UploadFS;
// import { SERVICE, CATEGORY, LEAD, FORM, QUOTE, IMAGE, THUMB, THREAD, MESSAGE } from './models';
import { DEFAULT_PICTURE_URL } from './models';

// import { Mongo } from 'meteor/mongo';
// import { UploadFS } from 'meteor/jalik:ufs';

// Mongo = Mongo || { Collection : () => () => ({})};

// An interface to create orgFind Method in Mong.Collection.

export const Services = new MongoObservable.Collection<SERVICE>('services');
export const Categories = <GroundBaseCollection<CATEGORY>>
                            new Mongo.Collection('categories');
export const Settings = <GroundBaseCollection<SETTING>>
                            new Mongo.Collection('settings');
export const Leads = new MongoObservable.Collection<LEAD>('leads');
export const Quotes = new MongoObservable.Collection<QUOTE>('quotes');
export const FocForms = <GroundBaseCollection<FORM>> new Mongo.Collection('forms');
export const Users = MongoObservable.fromExisting(Meteor.users);
export const ChatThreads =  new MongoObservable.Collection<THREAD>('chat-threads');
export const Messages = <GroundBaseCollection<MESSAGE>> new Mongo.Collection('messages');
export const ArchieveMessages = new MongoObservable.Collection('archieve.messages');
export const Promotions = <GroundBaseCollection<PROMOTION>>
                            new Mongo.Collection('promotions');
export const PromotionsLeads = new MongoObservable.Collection<LEAD>('promotions-leads');
export const Notifications = new MongoObservable.Collection<NOTIFICATION>('notifications');
export const Totals = <GroundBaseCollection<TOTALS>> new Mongo.Collection('totals.count');

/**
 * Images Collection
 */

export interface ImagesCollection<T> extends MongoObservable.Collection<T> {
    getPictureUrl(selector?: Object | string): string;
}

export const Images =
    new MongoObservable.Collection<IMAGE>('images') as ImagesCollection<IMAGE>;
export const Thumbs40 =
    new MongoObservable.Collection<THUMB>('thumbs40') as ImagesCollection<THUMB>;
export const Thumbs96 =
    new MongoObservable.Collection<THUMB>('thumbs96') as ImagesCollection<THUMB>;






Images.getPictureUrl = function (selector) {
    const picture = this.findOne(selector) || {};
    return picture.url || DEFAULT_PICTURE_URL;
};
Thumbs40.getPictureUrl = function (selector) {
    const picture = this.findOne(selector) || {};
    return picture.url || DEFAULT_PICTURE_URL;
};
Thumbs96.getPictureUrl = function (selector) {
    const picture = this.findOne(selector) || {};
    return picture.url || DEFAULT_PICTURE_URL;
};

export const ImagesStore = new UploadFS.store.GridFS({
    collection: Images.collection,
    name: 'images',
    filter: new UploadFS.Filter({
        contentTypes: ['image/*']
    }),
    // permissions: new UploadFS.StorePermissions({
    //     insert: picturesPermissions,
    //     update: picturesPermissions,
    //     remove: picturesPermissions
    // }),
});

// function picturesPermissions(userId: string): boolean {
//     return Meteor.isServer || !!userId;
// }
