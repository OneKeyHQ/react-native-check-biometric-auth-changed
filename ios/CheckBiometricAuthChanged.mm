#import "CheckBiometricAuthChanged.h"
#import <LocalAuthentication/LocalAuthentication.h>

@implementation CheckBiometricAuthChanged
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(checkChanged:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    BOOL changed = NO;
    LAContext *context = [[LAContext alloc] init];
    [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthentication error:nil];
    NSData *domainState = [context evaluatedPolicyDomainState];
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    NSData *oldDomainState = [defaults objectForKey:@"biometricAuthState"];
    if (oldDomainState)
    {
       changed = ![oldDomainState isEqual:domainState];
    }
    [defaults setObject:domainState forKey:@"biometricAuthState"];
    [defaults synchronize];
    resolve(@(changed));
}


@end
