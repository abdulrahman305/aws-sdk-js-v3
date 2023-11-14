// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  AddDraftAppVersionResourceMappingsRequest,
  AddDraftAppVersionResourceMappingsResponse,
} from "../models/models_0";
import {
  de_AddDraftAppVersionResourceMappingsCommand,
  se_AddDraftAppVersionResourceMappingsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddDraftAppVersionResourceMappingsCommand}.
 */
export interface AddDraftAppVersionResourceMappingsCommandInput extends AddDraftAppVersionResourceMappingsRequest {}
/**
 * @public
 *
 * The output of {@link AddDraftAppVersionResourceMappingsCommand}.
 */
export interface AddDraftAppVersionResourceMappingsCommandOutput
  extends AddDraftAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds the source of resource-maps to the draft version of an application. During assessment, Resilience Hub will use these resource-maps to resolve the latest physical ID for each resource in the application template. For more information about different types of resources suported by Resilience Hub and how to add them in your application, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/how-app-manage.html">Step 2: How is your application managed?</a> in the Resilience Hub User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, AddDraftAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, AddDraftAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // AddDraftAppVersionResourceMappingsRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceMappings: [ // ResourceMappingList // required
 *     { // ResourceMapping
 *       resourceName: "STRING_VALUE",
 *       logicalStackName: "STRING_VALUE",
 *       appRegistryAppName: "STRING_VALUE",
 *       resourceGroupName: "STRING_VALUE",
 *       mappingType: "STRING_VALUE", // required
 *       physicalResourceId: { // PhysicalResourceId
 *         identifier: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         awsRegion: "STRING_VALUE",
 *         awsAccountId: "STRING_VALUE",
 *       },
 *       terraformSourceName: "STRING_VALUE",
 *       eksSourceName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddDraftAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * // { // AddDraftAppVersionResourceMappingsResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   resourceMappings: [ // ResourceMappingList // required
 * //     { // ResourceMapping
 * //       resourceName: "STRING_VALUE",
 * //       logicalStackName: "STRING_VALUE",
 * //       appRegistryAppName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       mappingType: "STRING_VALUE", // required
 * //       physicalResourceId: { // PhysicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddDraftAppVersionResourceMappingsCommandInput - {@link AddDraftAppVersionResourceMappingsCommandInput}
 * @returns {@link AddDraftAppVersionResourceMappingsCommandOutput}
 * @see {@link AddDraftAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link AddDraftAppVersionResourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class AddDraftAppVersionResourceMappingsCommand extends $Command<
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
  ResiliencehubClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: AddDraftAppVersionResourceMappingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddDraftAppVersionResourceMappingsCommandInput, AddDraftAppVersionResourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddDraftAppVersionResourceMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "AddDraftAppVersionResourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "AddDraftAppVersionResourceMappings",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: AddDraftAppVersionResourceMappingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AddDraftAppVersionResourceMappingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddDraftAppVersionResourceMappingsCommandOutput> {
    return de_AddDraftAppVersionResourceMappingsCommand(output, context);
  }
}
