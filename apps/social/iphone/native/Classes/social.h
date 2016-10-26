//
//  MyAppDelegate.h
//
//

#import "WLAppDelegate.h"
#import "WL.h"

@interface MyAppDelegate : WLAppDelegate <WLInitWebFrameworkDelegate, UIApplicationDelegate> {
    
}
@property (nonatomic, retain) IBOutlet UIWindow* window;

@end
