//
//  SocialSharing.h
//  sharingFile
//
//  Created by Stefanini Jaguariúna on 20/10/16.
//  Copyright © 2016 Patrícia Gabriele Neri. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MessageUI/MFMailComposeViewController.h>
#import "social.h"
#import "WLAppDelegate.h"
#import "WL.h"

@interface SocialSharing : UIViewController <UIPopoverControllerDelegate, MFMailComposeViewControllerDelegate, UIDocumentInteractionControllerDelegate>

@property (nonatomic , strong) NSString* params;

@property (nonatomic, strong) NSString* message;
@property (nonatomic, strong) NSString* text;
@property (nonatomic, strong) NSString* filename;
@property (nonatomic, strong) NSString* filedata;

@property (nonatomic, strong) MFMailComposeViewController *globalMailComposer;
@property (nonatomic, strong) UIDocumentInteractionController * documentInteractionController;
@property (retain) NSString * tempStoredFile;


@end

