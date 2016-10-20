package com.social;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

public class SocialSharing extends Activity {

    private static final String TAG = "SocialSharing";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
    	Log.d(TAG, "onCreate()");
        String msg = getIntent().getStringExtra("message");
        String title = getIntent().getStringExtra("title");
        super.onCreate(savedInstanceState);
        final Intent sendIntent = new Intent();
        sendIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET);
        sendIntent.setAction(Intent.ACTION_SEND);
        sendIntent.putExtra(Intent.EXTRA_TEXT, msg);
        sendIntent.setType("text/plain");
        startActivity(Intent.createChooser(sendIntent, title));
    }
}
